const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookname: String, 
    author_id: Number, 
    
    
    // isPublished: Boolean,
    // prices: {
        price: Number,
        // europePrice: String,
    // },
    // sales: {type: Number, default: 10},
    
    // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }
    ratings:Number,
    // summary :  mongoose.Schema.Types.Mixed,
    // isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

}, { timestamps: true });


module.exports = mongoose.model('Boook', bookSchema) //users
