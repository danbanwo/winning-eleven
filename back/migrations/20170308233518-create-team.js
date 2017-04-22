'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      players: {
        type: Sequelize.ARRAY
      },
      event_type: {
        type: Sequelize.STRING
      },
      team_fp_total: {
        type: Sequelize.INTEGER
      },
      won: {
        type: Sequelize.INTEGER
      },
      event_position: {
        type: Sequelize.INTEGER
      },
      lost: {
        type: Sequelize.INTEGER
      },
      amount_won: {
        type: Sequelize.INTEGER
      },
      fp_player_average: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('Teams');
  }
};