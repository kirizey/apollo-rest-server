
module.exports = (sequelize, DataTypes) => {
  const Buyer = sequelize.define('Buyer', {
    active: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
  }, {});
  Buyer.associate = function (models) {
    Buyer.hasOne(models.Person, {
      foreignKey: 'personId',
    });

    Buyer.belongsTo(models.Company, {
      foreignKey: 'buyers_ids',
    });
  };
  return Buyer;
};
