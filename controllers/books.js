const Book = require("../modals/books");

// Add book to DB
const AddBook = async (req, res) => {
  try {
    const {
      bookTitle,
      authorName,
      bookImage,
      bookGenre,
      wordsCount,
      description,
      moreInfo,
      fullDescription,
      isbn,
      publishedDate,
      pages,
      size,
      imprint,
    } = req.body;

    const book = new Book({
      bookTitle,
      authorName,
      bookImage,
      bookGenre,
      wordsCount,
      description,
      moreInfo,
      fullDescription,
      isbn,
      publishedDate,
      pages,
      size,
      imprint,
    });

    await book.save();
    res.status(201).json({ message: "Book Added Successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { AddBook };
