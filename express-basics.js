const express = require('express')

const app = express()

//app.get
app.get('/',(request, response)=>{
    console.log('user hit the resource')
    response.status(200).send('HomePage')
})
app.get('/about',(request, response)=>{
    console.log('user hit the resource')
    response.status(200).send('About Page')
})
//app.all
//to setup your 404 response
app.all('*', (request, response)=>{
    response.status(404).send('<h1>Resource Not Found</h1>')
})
//app.listen
app.listen(5000, ()=>{
    console.log('server is listening on port 5000...')
})