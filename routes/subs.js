const router = require('express-promise-router')();

router.get('/',(req,res)=> res.send({"msg":"Comming with get method"}))

module.exports = router;