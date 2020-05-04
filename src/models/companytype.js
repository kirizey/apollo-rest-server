
module.exports = (sequelize, DataTypes) => {
  const CompanyType = sequelize.define('CompanyType', {
    name: DataTypes.STRING,
  }, {});
  CompanyType.associate = function (models) {
    // associations can be defined here
  };
  return CompanyType;
};
