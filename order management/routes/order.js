const order= require("../services/OrderController")
const express = require('express');
const router= express.Router();
router.post("/addorder",(req,res)=>{
    order.addOrder(req,res)
})
router.get("/getorder",(req,res)=>{
    order.getOrder(req,res)
})
router.get("/getallorders",(req,res)=>{
    order.getallOrders(req,res)
})
// router.get("/getorderbyid",(req,res)=>{
//     order.retrieveOrder(req,res)
// })
router.post("/postorder",(req,res)=>{
    order.postOrder(req,res)
})
module.exports=router;