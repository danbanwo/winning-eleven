'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Stats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      participated_tournaments: {
        type: Sequelize.INTEGER
      },
      tournaments_won: {
        type: Sequelize.INTEGER
      },
      tournaments_lost: {
        type: Sequelize.INTEGER
      },
      participated_contest: {
        type: Sequelize.INTEGER
      },
      contests_won: {
        type: Sequelize.INTEGER
      },
      contests_lost: {
        type: Sequelize.INTEGER
      },
      payout_til_date: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Stats');
  }
};