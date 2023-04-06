var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/signup", function (req, res, next) {
  res.render("add");
});
router.get("/login", function (req, res, next) {
  res.render("login");
});
module.exports = router;
