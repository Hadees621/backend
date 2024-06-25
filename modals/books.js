const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  bookImage: {
    type: String,
    required: true,
  },
});

const Books = mongoose.model("Book", bookSchema);

module.exports = Books;
