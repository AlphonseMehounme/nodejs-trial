const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        let html = fs.readFileSync('./index.html', 'utf-8');
        html = html.replace('{{name}}', 'Satoshi');
        res.end(html);
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('About Us');
    } else if (req.url === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({
            'Bitcoin': 'The One King'
        }))
    } else {
        res.writeHead(404);
        res.end('Empty, like shitcoins hihi');
    }
});

server.listen(3000, () => {
    console.log('SERVER RUNNING hihihi');
});