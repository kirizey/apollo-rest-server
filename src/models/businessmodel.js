
module.exports = (sequelize, DataTypes) => {
  const BusinessModel = sequelize.define('BusinessModel', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  BusinessModel.associate = function (models) {
    BusinessModel.belongsToMany(models.Company, {
      through: 'CompaniesBusinessModels',
      foreignKey: 'companyId',
      as: 'companies',
    });
  };
  return BusinessModel;
};
