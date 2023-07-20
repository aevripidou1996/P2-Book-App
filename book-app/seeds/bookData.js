const { Book } = require("../models");

const bookData = [
  {
    title: "ABC 123",
    genre: 1,
    description: "a very good book",
    author: "John Doe",
  },
  {
    title: "ABC 123342534543",
    genre: 2,
    description: "a very good book",
    author: "Jame Doe",
  },
];

const seedBook = () =>
  Book.bulkCreate(bookData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedBook;
