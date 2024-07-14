const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const Route = express.Router();

Route.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

Route.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
});

module.exports = Route;