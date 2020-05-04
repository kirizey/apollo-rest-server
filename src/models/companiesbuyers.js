
module.exports = (sequelize, DataTypes) => {
  const CompaniesBuyers = sequelize.define('CompaniesBuyers', {
    companyId: DataTypes.INTEGER,
    buyerId: DataTypes.INTEGER,
  }, {});
  CompaniesBuyers.associate = function (models) {
    CompaniesBuyers.belongsTo(models.Company, { foreignKey: 'companyId' });
    CompaniesBuyers.belongsTo(models.Buyers, { foreignKey: 'buyerId' });
  };
  return CompaniesBuyers;
};
