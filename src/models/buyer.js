
module.exports = (sequelize, DataTypes) => {
  const Buyer = sequelize.define('Buyer', {
    active: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    personId: DataTypes.INTEGER,
  }, {});
  Buyer.associate = function (models) {
    Buyer.hasOne(models.Person, {
      foreignKey: 'personId',
    });

    Buyer.belongsToMany(models.IndustryCategory, {
      through: 'CompaniesBuyers',
      foreignKey: 'companyId',
      as: 'companies',
    });
  };
  return Buyer;
};
