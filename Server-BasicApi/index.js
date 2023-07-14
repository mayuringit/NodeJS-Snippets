const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'Index.html'),
        (err, content) => {
            if(err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        })
    }
    else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'),
        (err, content) => {
            if(err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        })
    }
    //for api  type json
    if (req.url === '/api/users') {
        //for sample static data used
       const users = [ 
        {name: 'mayur pande', age: 40},
        {name: 'john doe', age: 20},
        {name: 'ari pan', age: 22}
       ];
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(users));
        
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
