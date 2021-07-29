const mongoose = require('mongoose')
const HeartBeat = mongoose.model("HEART_BEAT")

exports.leta = (req,res)=>{
    const {heartbeat,temperature} = req.params
    const heart = new HeartBeat()
    const date = new Date()
    const currentDate = date.toLocaleDateString("en-us",{timeZone:"Africa/Nairobi"})
    const currentTime = date.toLocaleTimeString("en-us",{timeZone:"Africa/Nairobi"})
    heart.heartbeat = heartbeat;
    heart.temperature = temperature;
    heart.date = currentDate;
    heart.time = currentTime;
    heart.status = false
    heart.save((err,docs)=>{
        if(!err){
            res.send("SUCCESS")
        }
    })
}

exports.pata = (req,res)=>{
    HeartBeat.find((err,docs)=>{
        if (!err){
            res.json(docs)
        }
    })
}

exports.futa = async (req,res)=>{
    const id = req.params
    console.log(id,"id server")
    const heart = await HeartBeat.findOne({_id:id.id})
    const docs = await HeartBeat.find((err,docs)=>{
        if(!err){
            return docs
        }
    })
    const index = docs.findIndex((item)=>item._id == id.id)
    if (index !== -1){
        heart.status = true
        await HeartBeat.replaceOne(docs[index],heart)
    }
 
   

}