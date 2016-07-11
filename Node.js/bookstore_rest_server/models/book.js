var mongoose = require("mongoose");

var bookSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
  publisher: {
    type: String,
  },
  pages: {
    type: String,
  },
  img_url: {
    type: String
  },
  buy_url: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Books = module.exports = mongoose.model('Book', bookSchema);

//getBooks
module.exports.getBooks = function(callback, limit) {
  Books.find(callback).limit(limit);
}

//getBooks
module.exports.getBookById = function(id, callback) {
  Books.findById(id, callback);
}

//addBook
module.exports.addBook = function(book, callback) {
  Books.create(book, callback);
  console.log("Book added!");
}

//updateGenre
module.exports.updateBook = function(id, book, options, callback) {
  var find = {_id: id}
  var update = {
    title: book.title,
    genre: book.genre,
    author: book.author,
    description: book.description,
    publisher: book.publisher,
    pages: book.pages,
    img_url: book.img_url,
    buy_url: book.buy_url
  };
  Books.findOneAndUpdate(find, update, options, callback);
  console.log("Updated book with ID: " + id)
}

//deleteBookById
module.exports.deleteBookById = function(id, callback) {
  var find = {_id: id};
  Books.remove(find, callback);
  console.log("Deleted book with ID: " + id)
}
