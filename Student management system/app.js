const express = require('express')
var student=require("./routes/student")
var mark=require("./routes/mark")

const app = express()
app.use(express.json())


app.use('/students',student)
app.use('/marks',mark)

app.listen(4000,()=>{
    console.log("port no 4000")
});