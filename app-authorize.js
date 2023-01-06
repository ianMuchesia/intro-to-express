const express = require('express')
const {products} = require('./data.js')

const app = express()

//req => middleware => res
const logger = require('./logger')
const authorize = require('./authorize.js')
app.use([logger, authorize])
//you pass in the logger in the app.use
//app.use("/api",logger)
//it will keep on applying these route api/....

app.get('/', (req, res)=>{
    
    res.send('Home')
})

app.get('/about', (req, res)=>{
    res.send('About') 
}) 

app.get('/api/products', (req, res)=>{
    
    res.send('Home')
})

app.get('/api/items', (req, res)=>{
    console.log(req.user)
    res.send('About') 
}) 

app.listen(5000, ()=>{
    console.log("server is running on port 5000...")
})