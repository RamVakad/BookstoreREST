var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.get('/index', function(req, res){
    res.sendFile(__dirname+'/public/views/index.html');
});

app.listen(8082, function(err){
    if(err){
        throw err;
    }
    console.log("Bookstore Website Started on 8082.");
});
