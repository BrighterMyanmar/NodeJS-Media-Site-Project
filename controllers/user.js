const UserDB = require('../models/user');
const Helper = require('../utils/helper');

let register = async (req, res) => {

    let emailUser = await UserDB.findOne({ email: req.body.email });
    if (emailUser) {
        Helper.fMsg(res, "Email is already in use!");
    } else {
        let phoneUser = await UserDB.findOne({ phone: req.body.phone });
        if (phoneUser) {
            Helper.fMsg(res, "Phone is already in use!");
        } else {
            req.body.password = Helper.encodePass(req.body.password);
            let user = new UserDB(req.body);
            let result = await user.save();
            result.password = undefined;
            Helper.fMsg(res, "User Created", result);
        }
    }
}

let login = async (req, res) => {
    let phoneUser = await UserDB.findOne({ phone: req.body.phone });
    if (phoneUser) {
        let con = Helper.comparePass(req.body.password, phoneUser.password);
        if (con) {
            let token = Helper.makeToken({ "_id": phoneUser._id, "email": phoneUser.email, "phone": phoneUser.phone });
            phoneUser.token = token;
            phoneUser.password = undefined;
            res.send({"con":true,"msg":"Login Success",result:phoneUser,token});
        } else {
            res.send({ "con": false, "msg": "Creditial Error!!" });
        }
    } else {
        res.send({ "con": false, "msg": "No user with that phone!" });
    }
}
module.exports = {
    register,
    login
}