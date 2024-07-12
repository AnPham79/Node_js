const express = require('express');

const Route = express.Router();

Route.get('/', (req, res) => {
    res.send('<h1>Đây là trang chủ</h1>');
});

module.exports = Route;