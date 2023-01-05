const express = require('express')
const {products} = require('./data.js')

const app = express()

app.get('/',(req,res)=>{
    res.status(200).json(products)
})

app.listen(5000, ()=>{
    console.log("server is running on port 5000...")
})