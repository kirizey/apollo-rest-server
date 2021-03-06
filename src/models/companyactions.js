
module.exports = (sequelize, DataTypes) => {
  const CompanyActions = sequelize.define('CompanyActions', {
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    companyId: DataTypes.INTEGER,
  }, {});
  CompanyActions.associate = function (models) {
    CompanyActions.belongsTo(models.Company, {
      foreignKey: 'companyId',
      as: 'company',
    });
  };
  return CompanyActions;
};
