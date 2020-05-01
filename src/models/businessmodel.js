'use strict';
module.exports = (sequelize, DataTypes) => {
  const BusinessModel = sequelize.define('BusinessModel', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  BusinessModel.associate = function(models) {
    // associations can be defined here
  };
  return BusinessModel;
};