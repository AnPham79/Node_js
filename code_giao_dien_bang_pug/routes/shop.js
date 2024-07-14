const path = require('path');
const express = require('express');
const route = express.Router();
const rootDir = require('../util/path');
const dataAdmin = require('./admin.js')

route.get('/', (req, res, next) => {
    res.render('shop', { products : dataAdmin.products, docTitle : 'shop' })
});

module.exports = route;
