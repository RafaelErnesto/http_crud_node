const http = require('http')

module.exports.startServer = (port = 5000, router) => {
    const server = http.createServer((req, res) => {
        router.route(req,res)
    })

    server.listen(port)
    console.log(`Server is listening on port ${port}`)
    return server;
}