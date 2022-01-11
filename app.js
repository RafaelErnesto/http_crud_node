const server = require('./server')
const router = require('./routes')

server.startServer(5000, router);