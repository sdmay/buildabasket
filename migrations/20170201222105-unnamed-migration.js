'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.addColumn(
  'Orders',
  'ShipAddress',
  Sequelize.TEXT
)
   queryInterface.addColumn(
  'Orders',
  'BillingAddress',
  Sequelize.TEXT
)
   queryInterface.addColumn(
  'Orders',
  'Shipped',
  Sequelize.BOOLEAN
)
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
