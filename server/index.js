const express = require('express')
const http = require('http');
const app = express()
const nodelog = require('@ajayos/nodelog');
const server = http.createServer(app);

//console.log('Server running at http://127.0.0.1:8081/');

const port = 3001

app.get('/', (req, res) => res.send('Hello World!'))
server.listen(port, () => log(`Server running  on port ${port}! http://localhost:3001`))