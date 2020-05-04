
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    email: { type: DataTypes.STRING, unique: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    surname: DataTypes.STRING,
    phone: DataTypes.STRING,
    companyId: DataTypes.INTEGER,
  }, {});
  Person.associate = function (models) {
    Person.belongsTo(models.Company, {
      foreignKey: 'companyId',
      as: 'company',
    });
  };
  return Person;
};
