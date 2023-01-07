let {people } = require('../data')

const getPeople =  (req,res)=>{
   
    res.status(200).json({success: true , data:people})
}

const getSinglePerson =  (req, res)=>{
    //but you should handle error
    const {id} = req.params;
    const selectedPerson = people.find(item=>item.id === Number(id))
    res.status(200).json({success: true , data: selectedPerson})
}

const getPostMan = (req, res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false , msg: "please provide name value"})
    }
    res.status(201).json({success:true, data: [...people,name ]})
}

const getUpdate = (req, res)=>{
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
 
   

}

const getDelete =  (req, res)=>{

    const {id} = req.params;
    const {name} = req.body;

    const selectedPerson = people.find(item=>item.id=== Number(id))
    if(!selectedPerson){
        return res.status(400).json({success:false , msg: "that person doesn't exist"})
    }
    const newPeople = people.filter(item=>item.id !== Number(id))
    res.status(201).json({success:true, data: newPeople })

}

module.exports = {
    getDelete, getPeople, getPostMan, getSinglePerson, getUpdate
}