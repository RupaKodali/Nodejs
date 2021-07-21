var Student = require("../../models/studentmodel")

var getstudent = async(req,res)=>{
    var students = await new Student().fetchAll();
    res.send({status : 200, data : students , message : "Students dispalyed" })
}
var addstudent = async(req,res)=>{
    try{
        var student = await new Student({
          studentname: req.body.studentname,
          studentid: req.body.studentid
        }).save();
        res.send({status : 201, data : student , message : "Student added" })
    }
    catch(err)
    {
        res.send({status : 500, message : "something went wrong" })
    }
}

var updatestudent = async(req,res)=>{
    var student = await Student.where("studentid", req.body.studentid).save(
        { ...req.body },
        { patch: true }
      );
      res.send({status : 200, data : student , message : "Student updated" })
      
}

module.exports={getstudent,addstudent,updatestudent}