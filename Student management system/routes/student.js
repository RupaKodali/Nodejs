var express= require('express')
var router = express.Router()
var student = require("../services/student/student")

router.get('/getstudents', async(req,res)=>{
    student.getstudent(req,res)
})

router.post('/addstudent',async (req, res) => {
    student.addstudent(req,res)
});
router.put("/update", async (req, res) => {
    student.updatestudent(req,res)
});
module.exports = router