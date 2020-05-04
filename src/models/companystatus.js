
module.exports = (sequelize, DataTypes) => {
  const CompanyStatus = sequelize.define('CompanyStatus', {
    name: DataTypes.STRING,
    stageNumber: DataTypes.INTEGER,
    description: DataTypes.STRING,
  }, {});
  CompanyStatus.associate = function (models) {
    // associations can be defined here
  };
  return CompanyStatus;
};
