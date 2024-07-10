// // Đoạn mã này tạo một server HTTP cơ bản bằng cách sử dụng module http trong Node.js
// //Dòng này import module http của Node.js, cho phép bạn tạo một server HTTP.
// const http = require('http')

// //Dòng này tạo một server HTTP bằng cách gọi http.createServer và truyền vào một callback function.
// const server = http.createServer((request, response) => {
//     // Đặt header cho response, không phải cho request
//     response.setHeader('Content-Type', 'text/html')

//     // Ghi nội dung HTML vào response
//     response.write('<html>')
//     response.write('<body>Con Cặt Đựu Mẹ</body>')
//     response.write('</html>')

//     // Kết thúc response
//     response.end()

// })

// //Trong đoạn mã này, callback function chỉ đơn giản là log ra đối tượng request mỗi khi server nhận được một yêu cầu.
// server.listen(3000)

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk)
    })
    req.on('end', () => {
        const pasedBody = Buffer.concat(body).toString();
        const message = pasedBody.split('=')[1];
        fs.writeFileSync('message.txt', message, 'utf8');
    })
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
