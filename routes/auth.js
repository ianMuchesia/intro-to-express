const express = require('express')

const router =  express.Router()
//post method using html
router.post('/', (req,res)=>{
    const {name } = req.body;
    console.log(name)
    name?res.send(`<h1>welcome ${name}</h1>` ):res.status(401).send("please provide credentials")
})


module.exports = router