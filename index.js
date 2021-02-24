const express = require('express');
const morgan = require('morgan');
const httpStatus = require('http-status');

const port = process.env.PORT || 5000;
const app = express();

app.use(morgan('combined'));

app.get('/healt', (req, res) => {
    return res.status(httpStatus.OK).json({ status: true, message: 'Here everiting OK' });
});

app.use('*', (req, res) => {
    return res.status(httpStatus.NOT_FOUND).json({ status: false, message: `Resource ${req.path} not exists` });
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

