const Router = require('./router')

const router = new Router();

router.registerRoute('GET', 'user', (req, res) =>  { 
    res.statusCode = 401
    res.end() 
});
router.registerRoute('GET', 'users', (req,res) => console.log(req.url));
router.registerRoute('POST', 'users', (req,res) => console.log(req.url));

module.exports = router