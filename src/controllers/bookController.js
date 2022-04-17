const AuthorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")
const PublisherModel=require("../models/publishermodel")
const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await BookModel.create(book)
    res.send({data: bookCreated})
}
const createBook1= async function (req, res) {
    let book = req.body
    if (book.author_id) {
        let bookCreated = await BookModel.create(book)
        res.send({data: bookCreated}) 
    }else{
    res.send({msg:"Author id is mendatory"})
    }
}
const createBook2= async function (req, res) {

    let book = req.body
    let k = await AuthorModel.findOne({_id:book.author_id});
if (k) {
    let bookCreated = await BookModel.create(book)
    res.send({data: bookCreated}) 
} else {
    res.send({msg:"given author id is not matches with author data base"})
}   
}
const createBook3= async function (req, res) {
    let book = req.body
    if (book.publisher_id) {
        let bookCreated = await BookModel.create(book)
        res.send({data: bookCreated}) 
    }else{
    res.send({msg:"publisher  id is mendatory"})
    }
}
const createBook4= async function (req, res) {
    let book = req.body
    let k = await PublisherModel.findOne({_id:book.publisher_id});
if (k) {
    let bookCreated = await BookModel.create(book)
    res.send({data: bookCreated}) 
} else {
    res.send({msg:"given publisher id is not matches with publisher datab base"})
}

   
}

const getBooksData= async function (req, res) {
    let books = await BookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    // let k =await AuthorModel.find().select({author_id:1,age:1})
    // console.log(k[0].age);
    let specificBook = await BookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: specificBook})
}

const books= async function (req, res) {
    let b = await BookModel.updateMany(
        {publisher_id : {$in : ["62590dced7937ca911caf8e3","62590cacd7937ca911caf8db"]}},
            {$set : {HardCover :true}}  ,
    )
   

    let a = await BookModel.updateMany(
        {ratings:{$gt:3.5}},
        {$inc:{price:10}}
)
    res.send({data:b})
}

    const book= async function (req, res) {
      
                let a = await BookModel.updateMany(
                    {ratings:{$gt:3.5}},
                    {$inc:{price:10}}
        )
        res.send({data:a})



    // let =await BookModel.updateMany(
    //     {publisher_id : {$in : ["62590dced7937ca911caf8e3","62590cacd7937ca911caf8db"]}},
    //     {$set : {isHardCover : true}}    
    //     );
    // let authors=await AuthorModel.find({rating : {$gt : 3.5}},{_id : 1});
    // let result=[];
    // for(let i=0;i<authors.length;++i)
    // {
    //     result[i]=await BookModel.updateMany(
    //         {author : authors[i]._id},
    //         {$inc : {price : 10}}
    //     );
    // }
    // res.send({msg : result});
}



module.exports.createBook= createBook
module.exports.books=books
module.exports.book=book
module.exports.createBook1= createBook1
module.exports.createBook2= createBook2
module.exports.createBook3= createBook3
module.exports.createBook4= createBook4
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
