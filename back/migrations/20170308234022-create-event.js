'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      prize_total: {
        type: Sequelize.INTEGER
      },
      no_of_prizes: {
        type: Sequelize.INTEGER
      },
      date_start: {
        type: Sequelize.STRING
      },
      date_end: {
        type: Sequelize.STRING
      },
      rules: {
        type: Sequelize.ARRAY
      },
      max_entries: {
        type: Sequelize.INTEGER
      },
      no_of_participants: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      participants: {
        type: Sequelize.ARRAY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Events');
  }
};