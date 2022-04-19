const { query } = require("express")
const batchModel = require("../models/batchModel")
const developerModel= require("../models/developerModel")

const createdeveloper= async function (req, res) {
    let developer= req.body
    let b = await developerModel.create(developer)
    res.send({data: b})
}

const getdevelopersData= async function (req, res) {
    let developers = await developerModel.find()
    res.send({data: developers})
}

const devbatch= async function (req, res) {
    let s = await developerModel.find().populate('batch_id')
    res.send({data: s})
}

const sch= async function (req, res) {
    let pk= await developerModel.find({ gender:"female",percentage:{$gt:70}}) 
    res.send({data:pk})
}


const dev= async function (req, res) {
    let p = req.query.percentage
    let q = req.query.program
    // console.log(p);
    // // console.log(q);
    // let developers = await developerModel.find({
    //     $and : [{batch_id.program:"backend"},{percentage:{$gte:p}}]}).populate("batch_id")
    let developers=await batchModel.find({program:q}).select({_id:1})
    console.log(developers)
    // let pq= await developerModel.find({
    //     $and : [{batch_id:{$in:developers}},{percentage:{$gte:p}}]})
    //     res.send({msg:pq})
    // let pq= await developerModel.find({
    //     percentage:{$gte:p}})
    
    // console.log(pq);
// let pq=await developerModel.find({program:})
let x=[]
for(let i in developers){
    let pq= await developerModel.find({ batch_id:developers[i],percentage:{$gte:p}}).populate("batch_id")
    x.push(pq)
}
res.send({msg:x})
}

module.exports.createdeveloper=createdeveloper
module.exports.getdevelopersData= getdevelopersData
module.exports.devbatch=devbatch
module.exports.sch=sch
module.exports.dev=dev
