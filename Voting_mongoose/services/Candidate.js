var Candidate=require("../models/Candidateschema")
var getcandidates = (req,res)=>{
    Candidate.find({},(err,data)=>{
        if(!err){

            res.send({status : 200,data : data , message : "Candidates displayed" })
        }
        else
        res.send({status : 500, message : "something went wrong" })
    })
}

module.exports={getcandidates};