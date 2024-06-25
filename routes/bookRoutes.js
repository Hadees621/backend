const express = require("express");
const { AddBook, getAllBooks, getBookById } = require("../controllers/books");

const router = express.Router();

// Route to add a book
router.post("/bookPost", AddBook);

// Route to get all books
router.get("/books", getAllBooks);

// Route to get book by ID
router.get("/books/:id", getBookById);

module.exports = router;
