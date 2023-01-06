const express = require('express')
const {products} = require('./data.js')
const morgan = require('morgan')
const app = express()

//req => middleware => res

//1. use vs route
//2. options - our own / express / third party

//in express we have a built in middleware in the name of static

// third party middleware
app.use(morgan('tiny'))

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
 
    res.send('About') 
}) 

app.listen(5000, ()=>{
    console.log("server is running on port 5000...")
})