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