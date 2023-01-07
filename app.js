const express = require('express')

const app = express()
const people =require('./routes/people')
const login = require('./routes/auth')
const { application } = require('express')

//static assets
app.use(express.static('./methods'))

//parse formData
app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())

app.use("/api/people", people)
app.use("/login", login)
//post method using html
/* app.post('/login', (req,res)=>{
    const {name } = req.body;
    console.log(name)
    name?res.send(`<h1>welcome ${name}</h1>` ):res.status(401).send("please provide credentials")
}) */

app.listen(5000, ()=>{
    console.log('server is listening on port 5000')
})