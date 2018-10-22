const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded());
app.use(cors());

app.post('/auth', (req, res) => {
    //console.log(req.body);
    if(req.body.login === "John" && req.body.password === "doe123") {
        res.end("You are logged in!");
    } else {
        res.end("Wrong credentials!")
    }
    
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})