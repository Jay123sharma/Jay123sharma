const { count } = require("console")
const Authormodel = require("../models/authormodel")

const createauthor= async function (req, res) {
    let data= req.body;
    let savedData= await Authormodel.create(data)
    res.send({msg: savedData})
}

module.exports.createauthor= createauthor