var Mark = require("../../models/markmodel")


var getmarks = async(req,res)=>{
    var marks = await new Mark().fetchAll();
    res.send({status : 200, data : marks , message : "Marks dispalyed" })
}

var addmarks = async(req,res)=>{
    try{
        var mark = await new Mark({
          studentid: req.body.studentid,
          sub : req.body.sub,
          mark : req.body.mark
        }).save();
        res.send({status : 200, data : marks , message : "Marks dispalyed" })
    }
    catch(err)
    {
        res.send({status : 500, message : "something went wrong" })
    } 
}
var updatemarks = async(req,res)=>{
    var mark = await Mark.where("studentid", req.body.studentid).save(
        { ...req.body },
        { patch: true }
    );
    res.json(mark);
}

module.exports={getmarks,addmarks,updatemarks}