const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/jobleads', (req, res) => {
    res.render('jobleads');
});

app.get('/deliciousdeliveries', (req, res) => {
    res.render('deliciousDeliveries');
});

app.get('/hangman', (req, res) => {
    res.render('hangman');
});

app.get('/mlb-tailgates', (req, res) => {
    res.render('mlbTailgates');
});

// NO LONGER RELEVENT, BUT STILL AN OPTION IF I GO BACK TO SENDGRID
//
// app.post('/thanks', (req, res) => {
//     console.log('res', res.body);
//     console.log('req', req.body.name, req.body.message);
//     const msg = {
//         to: 'zach.scheck@gmail.com',
//         from: 'zach.scheck@gmail.com',
//         subject: 'Sending with SendGrid is Fun',
//         text: 'Name: '+req.body.name + 'Email: ' + req.body.email + 'Message: '+ req.body.message,
//         html: '<strong>Name: </strong>'+req.body.name + '<br><strong>Email: </strong>' + req.body.email + '<br><strong>Message: </strong>'+ req.body.message,
//     };
//     sgMail.send(msg);
//     res.render('thanks', {contact: req.body})
// });

app.set("port", (process.env.PORT || 3080));

app.listen(app.get("port"), () => {
console.log("listening at http://localhost:" + app.get("port"));
});
