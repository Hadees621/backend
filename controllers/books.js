const Book = require("../modals/books");

// Add book to DB
const AddBook = async (req, res) => {
  try {
    const {
      id,
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
      id,
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

// Get all books from DB
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get book by ID
const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findOne({ id });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete book by ID
const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Attempting to delete book with id: ${id}`);

    const deletedBook = await Book.findOneAndDelete({ id });

    if (!deletedBook) {
      console.log("Book not found");
      return res.status(404).json({ message: "Book not found" });
    }

    console.log("Book deleted successfully");
    res.status(200).json({ message: "Book deleted successfully", deletedBook });
  } catch (err) {
    console.error("Error deleting book:", err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { AddBook, getAllBooks, getBookById, deleteBookById };
