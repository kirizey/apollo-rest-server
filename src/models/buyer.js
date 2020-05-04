
module.exports = (sequelize, DataTypes) => {
  const Buyer = sequelize.define('Buyer', {
    active: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    personId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER,
  }, {});
  Buyer.associate = function (models) {
    Buyer.hasOne(models.Person, {
      foreignKey: 'personId',
    });

    Buyer.belongsTo(models.Company, {
      foreignKey: 'companyId',
      as: 'company',
    });
  };
  return Buyer;
};
