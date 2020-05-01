
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    legalName: DataTypes.STRING,
    abbrName: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    employeesNumber: DataTypes.INTEGER,
    description: DataTypes.STRING,
    logo: DataTypes.STRING,
    photos: DataTypes.ARRAY(DataTypes.STRING),
    web: DataTypes.STRING,
    foundationDate: DataTypes.DATE,
  }, {});
  Company.associate = (models) => {
    /**
     * Company has 1 owner.
     */
    Company.hasOne(models.Person, {
      as: 'owner',
    });

    Company.hasOne(models.CompanyType, {
      as: 'companyType',
    });

    Company.hasOne(models.Revenue, {
      as: 'revenue',
    });

    Company.hasOne(models.Company, {
      as: 'parent',
    });

    Company.hasOne(models.CompanyStatus, {
      as: 'status',
    });

    Company.hasOne(models.BusinessModel, {
      as: 'businessModel',
    });
  };
  return Company;
};
