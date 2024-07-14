// cài đặt goi body parser npm install body-parser là một middleware trong Node.js dùng để xử lý dữ liệu gửi đến 
//từ các form HTML hoặc JSON request body
// cài đậy nodemon để tự động khởi động lại ứng dụng nodejs khi phát hiện có thây đổi trong tệp nguồn
// app.use được sử dụng để app dụng middleware

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

// Cấu hình body-parser để xử lý các request dạng urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// // Middleware để log thông tin yêu cầu
// app.use((req, res, next) => {
//     console.log('lmao dark bruhn'); // Sửa `console` thành `console.log`
//     next(); // Gọi next() để tiếp tục xử lý middleware hoặc route tiếp theo
// });

// // Middleware khác để log thông tin yêu cầu
// app.use((req, res, next) => {
//     console.log('lmao dark bruhn another'); // Sửa `console` thành `console.log`
//     next(); // Gọi next() để tiếp tục xử lý middleware hoặc route tiếp theo
// });

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(adminRoutes);

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
