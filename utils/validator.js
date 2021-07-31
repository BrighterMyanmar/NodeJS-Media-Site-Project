let bodyValidate = (schema) => {
    return (req,res,next) => {
        let result = schema.validate(req.body);
        if(result.error) res.send({con:false,'msg':result.error.details[0].message})
        else next()
    }
}

module.exports = {
    bodyValidate
}