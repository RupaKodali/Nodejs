const mongoose = require('mongoose')
const schema = mongoose.Schema

const Userschema = new schema({
    username : String,
    password : String,
    email : String,
    isvoted : Boolean
})
module.exports = mongoose.model("User", Userschema);

