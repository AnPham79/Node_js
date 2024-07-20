const express = require('express');
const bodyParser = require("body-parser");
const sequelize = require('./database/database');
const userRoute = require('./routes/userRoute');
const path = require('path');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', userRoute);

sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log("Ứng dụng của bạn khởi động với port 3000");
        });
    })
    .catch(err => {
        console.log(err);
    });
