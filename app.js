//var createError = require('http-errors');
var express = require("express");

var mongoose = require("mongoose");
var passport = require("passport");
var config = require("./config/database");
const expressHbs = require("express-handlebars");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var apiRouter = require("./routes/api");

var app = express();
app.engine(
  ".hbs",
  expressHbs.engine({
    extname: "hbs",
  })
);
app.set("view engine", ".hbs");
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use("/api", apiRouter);

mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// var cors = require('cors')

// app.use(cors());

app.use(passport.initialize());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log("404 - Khong tim thay trang");
  next();
});

module.exports = app;

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
