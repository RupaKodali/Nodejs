const mongoose = require('mongoose')
const CandidateSchema = new mongoose.Schema({
    name : String,
    count : Number,
    id : Number
})
//const CandidateModel = mongoose.model('candidate',candidateSchema)
//module.exports={UserModel,CandidateModel}
module.exports= mongoose.model('Candidate',CandidateSchema);