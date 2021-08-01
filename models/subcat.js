const mongoose = require('mongoose');
const { Schema } = mongoose;

const SubCatSchema = new Schema({
    name : {type:String,required:true},
    cat : {type:Schema.Types.ObjectId, ref:'category'},
    created:{type:Date, default:Date.now},
    updated:{type:Date, default:Date.now}
});

const Subcat = mongoose.model('subcat',SubCatSchema);
module.exports = Subcat;
