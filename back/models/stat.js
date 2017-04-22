'use strict';
module.exports = function(sequelize, DataTypes) {
  var Stat = sequelize.define('Stat', {
    participated_tournaments: DataTypes.INTEGER,
    tournaments_won: DataTypes.INTEGER,
    tournaments_lost: DataTypes.INTEGER,
    participated_contest: DataTypes.INTEGER,
    contests_won: DataTypes.INTEGER,
    contests_lost: DataTypes.INTEGER,
    payout_til_date: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Stat;
};