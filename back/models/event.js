'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    prize_total: DataTypes.INTEGER,
    no_of_prizes: DataTypes.INTEGER,
    date_start: DataTypes.STRING,
    date_end: DataTypes.STRING,
    rules: DataTypes.ARRAY(DataTypes.STRING),
    max_entries: DataTypes.INTEGER,
    no_of_participants: DataTypes.INTEGER,
    type: DataTypes.STRING,
    participants: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Event;
};
