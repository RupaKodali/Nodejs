const express=require('express');

const order = require("./routes/order")
const con = require('./utils/db')
const app=express();
app.use(express.json())
con.on('open', (err,connect)=>{
    if(err)
    console.log(err)
    else
    console.log("Database connected")
})

app.use("/order",order);
app.listen(8000,(err,connect)=>{
    if(err)
    console.log(err)
    else
    console.log("Port 8000 connected")
})
