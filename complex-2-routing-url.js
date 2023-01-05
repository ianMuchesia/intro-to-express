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

app.get('/api/v1/query',(req,res)=>{
   // console.log(req.query) 
   const {search, limit} = req.query
    let sortedProducts = [...products];

    if(search){
      sortedProducts = sortedProducts.filter(product=>{
         product.name.startsWith(search)
      })  
     
      
    }
    if(limit){
       sortedProducts = sortedProducts.slice(0, Number(limit)) 
       //res.send(sortedProducts)
    }
    if(sortedProducts.length<1){
        //res.status(200).send("We couldn't find a product matching your search")
        return res.status(200).send({success: true, data:[]})
    }
   return res.status(200).json(sortedProducts)
})
app.listen(5000, ()=>{
    console.log("server is running on port 5000...")
})