// // Đoạn mã này tạo một server HTTP cơ bản bằng cách sử dụng module http trong Node.js
// //Dòng này import module http của Node.js, cho phép bạn tạo một server HTTP.
// const http = require('http')

// //Dòng này tạo một server HTTP bằng cách gọi http.createServer và truyền vào một callback function.
// const server = http.createServer((request, response) => {
//     // Đặt header cho response, không phải cho request
//     response.setHeader('Content-Type', 'text/html')

//     // Ghi nội dung HTML vào response
//     response.write('<html>')
//     response.write('<body>Phạm Ngọc Bảo An</body>')
//     response.write('</html>')

//     // Kết thúc response
//     response.end()

// })

// //Trong đoạn mã này, callback function chỉ đơn giản là log ra đối tượng request mỗi khi server nhận được một yêu cầu.
// server.listen(3000)

const http = require('http');
const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);
