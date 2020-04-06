export default (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  Company.associate = (models) => {
    // 1:M
    Company.belongsTo(models.Owner, {
      foreignKey: 'ownerId',
    });
  };

  return Company;
};
