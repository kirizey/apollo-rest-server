
module.exports = (sequelize, DataTypes) => {
  const CompaniesBusinessModels = sequelize.define('CompaniesBusinessModels', {
    companyId: DataTypes.INTEGER,
    businessModelId: DataTypes.INTEGER,
  }, {});
  CompaniesBusinessModels.associate = function (models) {
    CompaniesBusinessModels.belongsTo(models.Company, { foreignKey: 'companyId' });
    CompaniesBusinessModels.belongsTo(models.BusinessModel, { foreignKey: 'businessModelId' });
  };
  return CompaniesBusinessModels;
};
