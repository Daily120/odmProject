const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '123',
        database: 'odm-data'
    }
})

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    db.select('*').from('users').where({id}) //ES6 syntax=== where({id: id})
        .then(user => user[0] ? res.json(user[0]) : res.status(400).json('Not found'))
        .catch(err => res.status(400).json('error getting user'))
})

app.post('/signin', (req, res) => {
    db.select('email', 'hash').from('login').where('email', '=', req.body.email)
    .then(data => {
        const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
        if (isValid) {
            return db.select('*').from('users').where('email', '=', req.body.email)
            .then(user => {
                res.json(user[0])
            })
            .catch(err => res.status(400).json('unable to get user'))
        } else {
            res.status(400).json('wrong credentials')
        }
    })
    .catch(err => res.status(400).json('wrong credentials'))
})

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    if (!email || !name || !password) {
        return res.status(400).json('incorrect form submission');
    }
    const hash = bcrypt.hashSync(password);

    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email
        }).into('login').returning('email')
        .then(loginEmail => {
            return trx('users')
                .returning('*')
                .insert({
                    email: loginEmail[0],
                    name: name,
                    joined: new Date()
            })
            .then(user => {
                res.json(user[0]);
            })
        })
        .then(trx.commit) //everything ok? apply chsnges
        .catch(trx.rollback) //error? rollback changes
    })
    .catch(err => res.status(400).json('unable to register'))
})

app.post('/sendmessage', (req, res) => {
    console.log(req.body);
    const { from_user, to_user, messageBody } = req.body;
    if (!from_user || !to_user || !messageBody) {
        return res.status(400).json('incorrect request');
    }

    db.insert({
        from_user: from_user,
        to_user: to_user,
        message: messageBody,
        time: new Date()
    }).into('messages').returning('*')
    .then(message => res.json(message[0]))
    .catch(err => res.status(400).json('Unexpected error!'))
})

app.get('/usermessages/:id', (req, res) => {
    const { id } = req.params;
    db.select('*').from('messages').where({from_user: id}).orWhere('to_user', '=', id)
        .then(messageArray => messageArray[0] ? res.json(messageArray) : res.status(400).json('No messages'))
        .catch(err => res.status(400).json('error getting user messages'))
})

app.listen(3001, () => {
    console.log('app is running on port 3001');
})