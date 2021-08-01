const DB = require('../models/subcat');

let add = async (req,res) =>{
    let subcat = new DB(req.body);
    let result = await subcat.save();
    res.send({con:true,'msg':"Sub Category Created",result});
}

let all = async(req,res) =>{
    let result = await DB.find().populate('cat');
    res.send({con:true,'msg':"All Sub Categories",result});
}

module.exports = {
    add,
    all
}