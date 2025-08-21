const { Sequelize } = require('sequelize');
require('dotenv').config();

// Use SQLite for development (easier setup)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // This will create a SQLite database file
  logging: false // Disable SQL logging for cleaner output
});

module.exports = sequelize;
