const Sequelize = require('sequelize');
const { UUID, UUIDV4, DECIMAL } = Sequelize;
const db = require('../database');

const Budget = db.define('budget', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  total: {
    type: DECIMAL,
    allowNull: false
  },
  finances: {
    type: DECIMAL,
    allowNull: false
  },
  totalExpenses: {
    type: DECIMAL,
    allowNull: false
  },
  income: {
    type: DECIMAL,
    allowNull: false
  }
});

module.exports = Budget;
