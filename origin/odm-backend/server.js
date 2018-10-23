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

app.listen(3001, () => {
    console.log('app is running on port 3001');
})