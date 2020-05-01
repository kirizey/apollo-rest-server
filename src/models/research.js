
module.exports = (sequelize, DataTypes) => {
  const Research = sequelize.define('Research', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  Research.associate = function (models) {
    Research.belongsTo(models.Company, {
      foreignKey: 'researches_ids',
    });
  };
  return Research;
};
