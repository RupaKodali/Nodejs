var Mark = require('../models/markmodel')
var Student = require('../models/studentmodel')

 var fetchmarks = async(req,res)=> {

    try {

        let val = await Mark.where({ "studentid": req.body.studentid,"sub": req.body.sub }).fetchAll({
            withRelated: ['student'],require: true
        });
        res.send({status : 201, data : val, message : "Marks of student displayed" })
    } catch (e) {
        res.send({status : 500, message : "Failed to fetch data: ${e}" })
}
}

var getstudentbyid =async(req,res)=>{
    var student = await new Student().fetch(id=req.params.id)
    var marks = await new Mark().fetch(id=req.params.id)
    res.send({status : 200, data : student , score : marks, message : "Student and marks dispalyed" })
}


module.exports ={ fetchmarks,getstudentbyid};