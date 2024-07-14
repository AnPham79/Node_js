const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const Route = express.Router();

const products = [];

Route.get('/add-product', (req, res, next) => {
    res.render('add-product', { docTitle : "Con Cặt Đựu Mẹ", path:'/add-product'})
});

Route.post('/add-product', (req, res, next) => {
    console.log(req.body.title)
    products.push({ title : req.body.title })
    res.redirect('/');
});

exports.routes = Route;
exports.products = products;