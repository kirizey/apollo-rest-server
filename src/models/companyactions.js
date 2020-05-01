
module.exports = (sequelize, DataTypes) => {
  const CompanyActions = sequelize.define('CompanyActions', {
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.STRING,
  }, {});
  CompanyActions.associate = function (models) {
    CompanyActions.belongsTo(models.Company, {
      foreignKey: 'actions_ids',
    });
  };
  return CompanyActions;
};
