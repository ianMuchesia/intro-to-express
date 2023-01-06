const express = require('express')
const {products} = require('./data.js')

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>HomePage</h1><a href="/api/products">products</a>')
})
app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params
    const singleProduct = products.find(item=>
       item.id === Number(productID)
    )
    if(singleProduct === undefined){
        
        return res.status(404).send('Product does not exist')
        
    }else{
        res.json(singleProduct)
    }
    
})
/* //returns id name and image only
app.get('/api/products',(req,res)=>{
    const newProducts = products.map(item=>{
        const {id ,name, image} = item;
        return {id,name,image};
    })
    res.json(newProducts)
}) */

app.listen(5000, ()=>{
    console.log("server is running on port 5000...")
})