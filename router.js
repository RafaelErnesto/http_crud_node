class Router {
    routes

    constructor() {
        this.routes = {
            'GET' : {},
            'POST': {},
            'PUT': {},
            'DELETE': {},
        }
    }

    registerRoute(method, path, callback) {
        if(!this.routes[method]) throw new Error('Invalid method');

        this.routes[method][path] =  callback
    }

    route(req, res) {
        let handlers = this.routes[req.method]
        const path = req.url.replace(/^\//,'')
        let handler = handlers[path]
        if(!handler) {
            res.statusCode = 404
            res.end('Not found')
        } else {
            handler(req,res)
        }
        res.end()
    }
}

module.exports = Router
