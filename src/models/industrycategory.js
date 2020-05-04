
module.exports = (sequelize, DataTypes) => {
  const IndustryCategory = sequelize.define('IndustryCategory', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  IndustryCategory.associate = function (models) {
    IndustryCategory.belongsToMany(models.Company, {
      through: 'CompaniesIndustryCategories',
      foreignKey: 'companyId',
      as: 'companies',
    });
  };
  return IndustryCategory;
};
