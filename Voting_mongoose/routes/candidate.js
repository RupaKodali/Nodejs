const express = require('express');
const candidate = require("../services/Candidate");

const router= express.Router();

router.get('/getcandidates', (req,res)=>{
    candidate.getcandidates(req,res)
})

module.exports =router;