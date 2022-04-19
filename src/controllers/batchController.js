const batchModel= require("../models/batchModel")

const createbatch= async function (req, res) {
    let  batch= req.body
    let a = await batchModel.create(batch)
    res.send({data: a})
}

const getbatchesData= async function (req, res) {
    let batch=await batchModel.find()
    res.send({data: batch})
}

module.exports.createbatch= createbatch
module.exports.getbatchesData= getbatchesData