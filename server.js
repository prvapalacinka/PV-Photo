const express = require('express');
const path = require('path');
const db = require('./config/connections.js');
const {User} = require('./models/index');
const app = express();


const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/user', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    .then((newUser) => {
        res.json(newUser);
    })
})
db.once('open', () => {
    app.listen(PORT);
});