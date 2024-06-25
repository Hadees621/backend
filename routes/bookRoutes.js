const express = require("express");
const router = express.Router();
const book = require("../controllers/books");

// routes
router.post("/bookPost", book.AddBook);

module.exports = router;
