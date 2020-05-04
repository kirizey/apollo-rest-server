
module.exports = (sequelize, DataTypes) => {
  const CompaniesIndustryCategories = sequelize.define('CompaniesIndustryCategories', {
    companyId: DataTypes.INTEGER,
    industryId: DataTypes.INTEGER,
  }, {});
  CompaniesIndustryCategories.associate = function (models) {
    CompaniesIndustryCategories.belongsTo(models.Company, { foreignKey: 'companyId' });
    CompaniesIndustryCategories.belongsTo(models.IndustryCategory, { foreignKey: 'industryCategoryId' });
  };
  return CompaniesIndustryCategories;
};
