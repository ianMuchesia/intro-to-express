const express = require('express')

const app = express()

let {people } = require('./data')

//the default get method
app.get('/api/people', (req,res)=>{
   
    res.status(200).json({success: true , data:people})
})


//the post method
app.listen(5000, ()=>{
    console.log('server is listening on port 5000')
})