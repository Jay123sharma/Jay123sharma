const express = require('express');
const router = express.Router();


const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishercontroller=require("../controllers/publishercontroller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createPublisher", publishercontroller.createPublisher  )

router.get("/getpublishersData", publishercontroller. getPublishersData)

router.post("/createBook", bookController.createBook)

router.post("/createBook1", bookController.createBook1)

router.post("/createBook2", bookController.createBook2)

router.post("/createBook3", bookController.createBook3)

router.post("/createBook4", bookController.createBook4)

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.put("/books",bookController.books)

router.put("/book",bookController.book)

module.exports = router;