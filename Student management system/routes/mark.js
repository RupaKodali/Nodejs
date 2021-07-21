var express = require('express')
var router= express.Router()
var mark = require("../services/mark/mark")
var relation = require("../services/relations")
router.get("/getmarks", (req,res)=>{
    mark.getmarks(req,res)
})
  
router.post('/addmark',(req, res) => {
   mark.addmarks(req,res)
});

router.put("/update", (req, res) => {
    mark.updatemarks(req,res)
  });
router.get("/fetchmark",(req,res)=>{
  relation.fetchmarks(req,res)
})
router.get("/get_student",(req,res)=>{
  relation.getstudentbyid(req,res)
});
module.exports = router