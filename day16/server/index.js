import http from 'node:http';
import path from 'node:path';

const PORT = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const { pathname, searchParams } = parsedUrl;

    console.log("요청 Pathname:", pathname);

    if (pathname === '/hi') {
        res.writeHead(200);
        res.end("hello");
    }
    else if (pathname === '/who') {
        res.writeHead(200);
        res.end("i'm JY");
    }
    else {
        res.writeHead(200);
        res.end("please req : /hi or /who");
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
