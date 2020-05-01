
module.exports = (sequelize, DataTypes) => {
  const Revenue = sequelize.define('Revenue', {
    current: DataTypes.DECIMAL,
    min: DataTypes.DECIMAL,
    max: DataTypes.DECIMAL,
  }, {});
  Revenue.associate = function (models) {

  };
  return Revenue;
};
