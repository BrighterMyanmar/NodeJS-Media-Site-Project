require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/${process.env.db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());

const catRouter = require('./routes/category');
const userRouter = require('./routes/user');

app.use('/cats', catRouter);
app.use('/user',userRouter);


app.get("*",(req,res)=>{
    // res.status(404).send({"msg":"No Route with that name!"});
    res.send({"msg":"No Route with that name!"},404);
})

app.listen(process.env.port, console.log(`Server Running at port ${process.env.port}`));



