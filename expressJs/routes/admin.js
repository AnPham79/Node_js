const express = require('express')

const Route = express.Router();

Route.use('/add-product', (req, res) => {
    res.send(`
        <form action="/product" method="POST">
            <input type="text" name="title" placeholder="Enter product title">
            <button type="submit">Add Product</button>
        </form>
    `);
});

Route.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = Route;