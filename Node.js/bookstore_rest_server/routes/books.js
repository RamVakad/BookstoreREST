var express = require('express');

//Model
Books = require('../models/book.js')

var booksRouter = express.Router();

booksRouter.get('/', function(req, res) {
  Books.getBooks(function (err, books) {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

booksRouter.get('/:_id', function(req, res) {
  Books.getBookById(req.params._id, function (err, book) {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});


booksRouter.post('', function(req, res) {
  var book = req.body;
  Books.addBook(book, function (err, book) {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

booksRouter.put('/:_id', function(req, res) {
  var id = req.params._id;
  var book = req.body;
  Books.updateBook(id, book, {}, function (err, book) {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});


booksRouter.delete('/:_id', function(req, res) {
  var id = req.params._id;
  Books.deleteBookById(id, function (err, book) {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});


module.exports = booksRouter;
