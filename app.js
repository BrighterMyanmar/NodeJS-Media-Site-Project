require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

mongoose.connect(`mongodb://localhost:27017/${process.env.db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
});

app.use(bodyParser.json());
app.use(fileUpload());

const catRouter = require('./routes/category');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

app.use('/cats', catRouter);
app.use('/user',userRouter);
app.use('/product',productRouter);


app.get("*",(req,res)=>{
    // res.status(404).send({"msg":"No Route with that name!"});
    res.send({"msg":"No Route with that name!"},404);
})

app.listen(process.env.port, console.log(`Server Running at port ${process.env.port}`));



