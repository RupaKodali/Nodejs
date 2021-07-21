const mongoose = require('mongoose')
const url = 'mongodb+srv://Rupa:Rupa.123@test.pis5z.mongodb.net/test'
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
const con = mongoose.connection
module.exports=con