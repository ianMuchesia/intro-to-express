const express =  require('express')
const  path  = require('path')

const app =  express()


//setup static and middleware
//app.use is used for settin up middleware
app.use(express.static('./sections'))


//there is no need for ap.get when you use express.static. you can dump all the files in one folder. i this case sections folder
app.get("/",(request, response)=>{
    response.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})
app.all('*',(request, response)=>{
    response.status(404).send('resource not found')
})

app.listen(5000,()=>{
    console.log('server is running on port 5000')
})