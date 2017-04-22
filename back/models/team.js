'use strict';
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define('Team', {
    players: DataTypes.ARRAY(DataTypes.STRING),
    event_type: DataTypes.STRING,
    team_fp_total: DataTypes.INTEGER,
    won: DataTypes.INTEGER,
    event_position: DataTypes.INTEGER,
    lost: DataTypes.INTEGER,
    amount_won: DataTypes.INTEGER,
    fp_player_average: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Team;
};
