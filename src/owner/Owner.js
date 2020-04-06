export default (sequelize, DataTypes) => {
  const Owner = sequelize.define('owner', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  return Owner;
};
