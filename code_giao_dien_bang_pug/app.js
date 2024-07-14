

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.set('view engine', 'pug')

app.use(adminRoutes.routes);

app.use(shopRoutes);

// Trong tệp app.js, thiết lập Express để phục vụ các tệp tĩnh từ thư mục public:
app.use(express.static(path.join(__dirname, 'public')))

const server = http.createServer(app);

// module.exports = path.dirname(process.mainModule.filename);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
