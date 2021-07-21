const mongoose=require('mongoose')
const url='mongodb://localhost:27017/test'
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
const con= mongoose.connection;
module.exports=con;

