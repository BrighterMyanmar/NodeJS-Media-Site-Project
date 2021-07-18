const DB = require("../models/category");

let create = async (req, res) => {
    let body = req.body;
    let cat = new DB(body);
    let result = await cat.save();
    res.send({
        "con": true,
        "msg": "Category Successfully Crated",
        "result": result
    });
}

let all = async (req, res) => {
    let cats = await DB.find();
    res.send({
        "con": true,
        "msg": "All Categories",
        "result": cats
    });
}

let get = async(req,res) => {
    let id = req.params.id;
    let result = await DB.findById(id);
    res.send({
        "con":true, 
        "msg":"Single Category",
        "result":result
    });
}
let patch = async(req,res) =>{
    let id = req.params.id;
    let result = await DB.findByIdAndUpdate(id,req.body);
    result = await DB.findById(id);
    res.send({
        "con":true, 
        "msg":"Category Patched",
        "result":result
    });
}
let drop = async(req,res) =>{
    let id = req.params.id;
    let result = await DB.findByIdAndDelete(id);
    res.send({
        "con":true, 
        "msg":"Category Deleted",
        "result":result
    });
}

module.exports = {
    create,
    all,
    get,
    patch,
    drop
}