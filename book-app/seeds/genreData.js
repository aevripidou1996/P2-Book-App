const { Genre } = require('../models');

const genreData =
[
  {
    "name": "Sci-fi"
  },
  {
    "name": "Drama"
  }
];

const seedGenre = () => Genre.bulkCreate(genreData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedGenre;
