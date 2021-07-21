var User= require("../models/Userschema")
var Candidate=require("../models/Candidateschema")

var getusers = (req,res)=>{
    User.find((err,data)=>{
        if(!err){

            res.send({status : 200,data : data , message : "Users displayed" })
        }
        else
        res.send({status : 500, message : "something went wrong" })
    })
}

var login = (req,res)=>{
    const username = req.body.username
    const password = req.body.password
    User.findOne({username : username}, (err,data)=> {
        if(!err && data)
        {
            if(data.password == password)
            {
                //console.log(data.isvoted)
                if(!data.isvoted){
                    res.send({status : 200, message : "succesfully logged in" })
                }
                else
                res.send({status : 200, message : "already voted" })
            }
            else
            res.send({status : 200, message : "incorrect password" })
        }
        else if(!data)
        res.send({status : 404, message : "user not found" })
        else 
        res.send({status : 500, message : "server error" })
    })
}


var register = (req,res)=>{
    const username=req.body.username 
    const password = req.body.password
    const email = req.body.email
    User.findOne({ username : username }, (err,data)=> {
        if(data)
        {
            res.send({status : 200, message : "user already exists" })
        }
        else
        {
            const user = new UserModel({
                username : username,
                password : password,
                email : email,
                isvoted : false
            })
            user.save(user,(err)=> { 
                if(!err){
                res.send({status : 200, message : "succesfully registered" })
                }
                else
                res.send({status : 500, message : "registration failed" })
            })
        }
    })
}

var vote = (req,res)=>{
    const id = req.body.id
    const username =req.body.username
    Candidate.findOne({id : id}, (err,data)=> {
    if(!err)
    {
        let votes = data.count
        Candidate.updateOne({id : id}, {count : votes+1},(err,res1)=> {
            if(!err)
            {
                User.updateOne({ username : username},{isvoted : true},(err,res2)=>{
                    if(!err)
                    {
                        res.send({status : 200, message : "succesfully voted" })
                    }
                    else
                    res.send({status : 500, message : "please vote again" })
                })
            }
        })
    }
    else
    res.send({status : 500, message : "please vote again" })
})
}

module.exports={login,register,vote,getusers};
