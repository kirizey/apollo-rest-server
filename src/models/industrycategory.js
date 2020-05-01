
module.exports = (sequelize, DataTypes) => {
  const IndustryCategory = sequelize.define('IndustryCategory', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  IndustryCategory.associate = function (models) {
    IndustryCategory.belongsTo(models.Company, {
      foreignKey: 'industry_categories_ids',
    });
  };
  return IndustryCategory;
};
