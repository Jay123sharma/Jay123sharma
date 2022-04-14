const mongoose = require('mongoose');

const authorschema = new mongoose.Schema( {
        author_id:Number,
        author_name: String,
        age:Number,
        address: String
}, { timestamps: true });

module.exports = mongoose.model('author', authorschema) //authors


