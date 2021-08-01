const DB = require('../models/role');

add = async (req,res) => {
    let role = new DB(req.body);
    let result = await role.save();
    res.send({con:true,'msg':"Role Created",result});
}
all = async (req,res) => {
    let result = await DB.find().populate('permits');
    res.send({con:true,'msg':"All Role",result});
}
remove = async(req,res) =>{
    let roleId = req.body.roleId;
    let permitId = req.body.permitId;
    await DB.findByIdAndUpdate(roleId,{$pull: {permits:permitId}});
    let result = await DB.findById(roleId);
    res.send({con:true,'msg':"All Role",result});
}

module.exports = {
    add,
    all,
    remove,
}