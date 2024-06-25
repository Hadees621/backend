const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

//MongoDB connection
const PORT = process.env.PORT || 4000;
// const dbURI = 'mongodb://localhost:27017/olympia';

mongoose
  .connect("mongodb://0.0.0.0:27017/olympia", {})
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
