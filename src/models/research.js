
module.exports = (sequelize, DataTypes) => {
  const Research = sequelize.define('Research', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    companyId: DataTypes.INTEGER,
  }, {});
  Research.associate = function (models) {
    Research.belongsTo(models.Company, {
      foreignKey: 'companyId',
      as: 'company',
    });
  };
  return Research;
};
