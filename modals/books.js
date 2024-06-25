const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
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
  wordsCount: {
    type: String,
    required: true,
  },
  bookGenre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  moreInfo: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  imprint: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
