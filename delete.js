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

//for updating data you use put

//post method using javascript frontend to add data

//put method to update 
app.put('/api/people/:id',(req, res)=>{
    const {id} = req.params
    const {name} = req.body
    const selectedPerson = people.find(item=>item.id === Number(id))
    if(!selectedPerson){
        return res.status(400).json({success:false , msg: "please provide name value"})
    }
    //res.status(201).json({success:true, data: [...people,name ]})
    const newPerson = people.map(item=>{
        if(item.id === Number(id)){
            item.name = name; 
            return item;   
        }else{
            return item;
        }
       
        
    })
    console.log(selectedPerson)
    res.status(201).json({success:true, data: newPerson })
 
   

})

app.delete('/api/people/:id', (req, res)=>{

    const {id} = req.params;
    const {name} = req.body;

    const selectedPerson = people.find(item=>item.id=== Number(id))
    if(!selectedPerson){
        return res.status(400).json({success:false , msg: "that person doesn't exist"})
    }
    const newPeople = people.filter(item=>item.id !== Number(id))
    res.status(201).json({success:true, data: newPeople })

})
app.listen(5000, ()=>{
    console.log('server is listening on port 5000')
})