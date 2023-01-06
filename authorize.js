const authorize = (req, res, next)=>{
    const {user} = req.query;
    if(user=== 'ian'){
        req.user = {name:'ian', id:3}
        console.log("authorize")
        next()
    }else{
        res.status(401).send('unauthorized')
    }
   
}

module.exports = authorize