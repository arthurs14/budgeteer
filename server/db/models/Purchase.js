const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING, DECIMAL } = Sequelize;
const db = require('../database');

const Purchase = db.define('purchase', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  purchaseName: {
    type: STRING,
    allowNull: false
  },
  price: {
    type: DECIMAL,
    allowNull: false
  },
  category: {
    type: STRING,
    allowNull: false
  }
});

module.exports = Purchase;
