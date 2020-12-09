'use strict';

const express = require('express');
const app = express();

const notFound = require('../src/error-handlers/404');
const serverError = require('../src/error-handlers/500');
const validator = require('./middleware/validator');

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});


// query
app.get('/person', validator, (req, res) => {
    res.status(500).json(req.query);
    console.log('We made it');
});



// log a request
const logRequest = require('./middleware/logger');
app.use(logRequest);


app.use('*', notFound);
app.use(serverError);


function start(PORT){
    app.listen(PORT, () => {
        console.log(`listening on ${PORT}`);
    })
}


module.exports = {
    server: app,
    start: start
}

