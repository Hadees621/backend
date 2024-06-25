const express = require("express");
const mongoose = require("mongoose");
const booksRoutes = require("./routes/bookRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1", booksRoutes);
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

//MongoDB connection
const PORT = process.env.PORT || 4000;
const dbURI = "mongodb://0.0.0.0:27017/olympia";

mongoose
  .connect(dbURI, {})
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
