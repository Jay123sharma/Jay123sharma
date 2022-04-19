const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema({
    name: String,
    batch_id: {
        type: ObjectId,
        ref: "batch"
    },
    gender: {
        type: String,
        enum: ["male", "female", "others"]
    },
    percentage: Number
}, { timestamps: true });


module.exports = mongoose.model('developer', developerSchema)//developers
