const express = require('express');
const app= express();
app.use(express.json())
const con= require('./utils/db')
const users= require("./routes/user")
const candidates=require("./routes/candidate")
con.on('open', (err,connect) => {
    if(err)
    console.log(err)
    else
    console.log('connected...')
})
// .then(
//     console.log("we are conected")
// ).catch(err => console.log(err))

app.use(users,candidates)

app.listen(8000, () => console.log("port connected at 8000"))