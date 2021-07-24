const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    encodePass : (password) => bcrypt.hashSync(password,10),
    comparePass : (plain,encodePass) => bcrypt.compareSync(plain,encodePass),
    fMsg :(res,msg,result={}) =>  res.send({con:true,msg,result}),
    makeToken : (playload) => jwt.sign(playload,process.env.SECRET_KEY)
}