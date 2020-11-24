const functions = require('firebase-functions');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendgrid/mail');
const SG_API_KEY = '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';
const PE = 'jnuno.423@gmail.com';
const PORT = 5000;

const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Controll-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
    next();
});

app.get('/', (req, res, next) => {
    res.send('go to API')
})

app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
})

app.post('/api/email', (req, res, next) => {

    sendGrid.setApiKey(SG_API_KEY);
    const msg = {
        to: PE,
        from: PE,
        subject: `From ${req.body.name} + ${req.body.email}`,
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });
            return null;
        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });
            return null;
        });

});

app.listen(PORT, () => {
    console.log(`Server is running...Port ${PORT}`)
});

exports.app = functions.https.onRequest(app);