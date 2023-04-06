var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Trang chu Express");
});
router.get("/addbook", function (req, res, next) {
  res.render("addbook");
});

module.exports = router;
