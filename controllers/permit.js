const DB = require('../models/permit');
const RoleDB = require('../models/role');

add = async (req, res) => {
    let permit = new DB(req.body);
    let result = await permit.save();
    await RoleDB.findByIdAndUpdate(req.body.role,{$push: {permits:result._id}});
    res.send({ con: true, 'msg': "Permit Created", result });
}
all = async (req, res) => {
    let result = await DB.find().populate('role');
    res.send({ con: true, 'msg': "All Permit", result });
}

module.exports = {
    add,
    all
}