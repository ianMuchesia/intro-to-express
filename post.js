const express = require('express')

const app = express()

let {people } = require('./data')
const { application } = require('express')

//static assets
app.use(express.static('./methods'))

//parse formData
app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())

//the default get method
app.get('/api/people', (req,res)=>{
   
    res.status(200).json({success: true , data:people})
})
//post using route
app.post('/api/postman/people', (req, res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false , msg: "please provide name value"})
    }
    res.status(201).json({success:true, data: [...people,name ]})
})

//post method using html
app.post('/login', (req,res)=>{
    const {name } = req.body;
    console.log(name)
    name?res.send(`<h1>welcome ${name}</h1>` ):res.status(401).send("please provide credentials")
})

//post method using javascript frontend to add data
app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false , msg: "please provide name value"})
    }
    res.status(201).json({success:true, person: name})
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000')
})