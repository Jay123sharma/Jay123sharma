const express = require('express');
const router = express.Router();

const batchController = require("../controllers/batchController")
const developerController = require("../controllers/developerController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createdeveloper", developerController.createdeveloper)

router.get("/getdevelopersData", developerController.getdevelopersData)

router.post("/createbatch", batchController.createbatch)

router.get("/getbatchesData", batchController.getbatchesData)

router.get("/devbatch", developerController.devbatch)

router.get("/scholarship-developers", developerController.sch)

router.get("/developers", developerController.dev)

module.exports = router;