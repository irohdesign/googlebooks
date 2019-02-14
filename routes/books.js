const router = require("express").Router();
const bookController = require("../controllers/bookController.js");

// test
router.route("/")
    .get(bookController.findAll)
    .post(bookController.create)
    .then(console.log("this is connected"));

// search

// saved

module.exports = router;