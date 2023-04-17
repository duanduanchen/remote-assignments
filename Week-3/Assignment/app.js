const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = 3000
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine','pug')

app.get('/', (req,res) => {
    res.send('Hello, My Server!');
});

app.get('/data', (req,res) => {
    const number = req.query.number;
    let result = 0;
    if (!number) {
        res.send('Lack Of Parameter')
    }
    else if (isNaN(number) || number<0) {
        res.send('Wrong Parameter')
    } else {
        for (let i=0; i<=number; i++) {
            result += i
        }
    }
    res.render('data', {result: result});
});

app.get('/myName', (req,res) => {
    res.render('name', {name: req.cookies.name});
});

app.get('/trackName', (req,res) => {
    const name = req.query.name;
    if (name) {
        res.cookie('name', name);
    }
    res.redirect('/myName');
});

app.post('/myName', (req,res) => {
    res.cookie('name', req.body.name);
    res.render('name', { name: req.body.name});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});