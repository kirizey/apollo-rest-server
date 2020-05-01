
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    email: { type: DataTypes.STRING, unique: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    surname: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {});
  Person.associate = function (models) {
    /**
     * Company has many contacts.
     */
    Person.belongsTo(models.Company, {
      foreignKey: 'contacts_ids',
    });
  };
  return Person;
};
