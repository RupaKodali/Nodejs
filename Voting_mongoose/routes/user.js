const express = require('express');
const router= express.Router();
const user= require("../services/User");


router.get('/getusers', (req,res) => {
  user.getusers(req,res)
})

router.post('/login', (req,res) => {
  user.login(req,res)
})



router.post('/register',(req,res) => {
    user.register(req,res)
})



router.post('/vote',(req,res) => {
    user.vote(req,res)
})



module.exports= router;