const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`hello world server side 3000`);
        res.end();
    } else if (req.url === '/about') {
        res.write('this is about page');
        res.end();
    } else {
        res.end(`oops!`);
    }
});

server.listen(3000);
