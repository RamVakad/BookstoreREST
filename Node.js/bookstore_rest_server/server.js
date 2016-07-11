//INIT ---------------
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var morgan = require('morgan');

//Connect to MongoDB --------------------------
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

//Use JSON Parser & Morgan for Console Logging All Requests
app.use(bodyParser.json())
app.use(morgan("dev"));


//CORS Fix for Local2Local
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8082');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
 });

//Setup Default & /api routes.
app.get('/', function(req, res) {
  res.send("Hello! The bookstore API is up and running! (/api/books & /api/genres)");
})
app.get('/api', function(req, res) {
    res.send("Nothing here.");
});


//Load All API Routes ------------------------
GenresRouter = require('./routes/genres.js')
BooksRouter = require('./routes/books.js')

app.use('/api/genres', GenresRouter);
app.use('/api/books', BooksRouter);


//Start Server ------------------------------
app.listen(8081, function(err){
    if(err){
        throw err;
    }
    console.log("Bookstore REST Server Started on 8081.");
});
