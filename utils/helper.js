const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const RedisDB = require('./redis');

let checkToken = (req) => {
    let tokenExist = false;
    if (req.headers.authorization) {
        return true;
    }
    return tokenExist;
}

let verifyToken = async (req, res, next) => {
    if (checkToken(req)) {
        let token = req.headers.authorization.split(" ")[1];
        let tokenUser = jwt.verify(token, process.env.SECRET_KEY);
        let redisUser = await RedisDB.getObj(tokenUser._id);
        if (redisUser) {
            next();
        } else {
            res.send({ con: false, "msg": "You are not authorized" });
        }
    } else {
        res.send({ con: false, "msg": "You are not authorized" });
    }
}

module.exports = {
    verifyToken,
    encodePass: (password) => bcrypt.hashSync(password, 10),
    comparePass: (plain, encodePass) => bcrypt.compareSync(plain, encodePass),
    fMsg: (res, msg, result = {}) => res.send({ con: true, msg, result }),
    makeToken: (playload) => jwt.sign(playload, process.env.SECRET_KEY)
}