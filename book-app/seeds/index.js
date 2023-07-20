const sequelize = require('../config/config');
const seedUser = require('./userData');
const seedBook = require('./bookData');
const seedGenre = require('./genreData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedGenre();
  await seedBook();

  process.exit(0);
};

seedAll();