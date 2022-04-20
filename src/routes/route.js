const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController")
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")
const cmw = require("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/createuser', cmw.mid1, UserController.createuser)

router.post('/createuser2', cmw.mid2, UserController.createuser2)

router.post('/createproduct', cmw.mid1, productController.createproduct)

router.post('/createorder', cmw.mid1, orderController.createorder)

module.exports = router;