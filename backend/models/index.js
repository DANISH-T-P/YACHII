const sequelize = require('../config/db');
const Product = require('./product.model');
const Newsletter = require('./newsletter.model');
const ContactMessage = require('./contact.model');

const db = {
  sequelize,
  Product,
  Newsletter,
  ContactMessage
};

module.exports = db;
