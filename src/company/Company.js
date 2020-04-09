export default (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    /**
     * Company name.
     */
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    /**
     * Company legal name.
     */
    legalName: {
      type: DataTypes.STRING,
    },
    /**
     * Company abbr name.
     */
    abbrName: {
      type: DataTypes.STRING,
    },
    /**
     * Company phone.
     */
    phone: {
      type: DataTypes.STRING,
    },
    /**
     * Company address.
     */
    address: {
      type: DataTypes.STRING,
    },
    /**
     * Company city.
     */
    city: {
      type: DataTypes.STRING,
    },
    /**
     * Company district.
     */
    district: {
      type: DataTypes.STRING,
    },
    /**
     * Company zip code.
     */
    zipCode: {
      type: DataTypes.INTEGER,
    },
    /**
     * Company employees number.
     */
    employeesNumber: {
      type: DataTypes.INTEGER,
    },
    /**
     * Company description.
     */
    description: {
      type: DataTypes.STRING,
    },
    /**
     * Company last research date.
     */
    lastResearchDate: {
      type: DataTypes.STRING,
    },
    /**
     * Company logo.
     */
    logo: {
      type: DataTypes.STRING,
    },
    /**
     * Company photos list.
     */
    photos: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    /**
     * Company web link.
     */
    web: {
      type: DataTypes.STRING,
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
