
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
    ownerId: DataTypes.INTEGER,
    companyTypeId: DataTypes.INTEGER,
    revenueId: DataTypes.INTEGER,
    parentId: DataTypes.INTEGER,
    companyStatusId: DataTypes.INTEGER,
    businessModelId: DataTypes.INTEGER,
  }, {});
  Company.associate = (models) => {
    Company.hasOne(models.Person, {
      foreignKey: 'ownerId',
      as: 'owner',
    });

    Company.hasOne(models.CompanyType, {
      foreignKey: 'companyTypeId',
      as: 'companyType',
    });

    Company.hasOne(models.Revenue, {
      foreignKey: 'revenueId',
      as: 'revenue',
    });

    Company.hasOne(models.Company, {
      foreignKey: 'parentId',
      as: 'parent',
    });

    Company.hasOne(models.CompanyStatus, {
      foreignKey: 'companyStatusId',
      as: 'status',
    });

    Company.hasOne(models.BusinessModel, {
      foreignKey: 'businessModelId',
      as: 'businessModel',
    });

    Company.hasMany(models.Person, {
      as: 'contacts',
    });

    Company.hasMany(models.Research, {
      as: 'researches',
    });

    Company.hasMany(models.Buyer, {
      as: 'buyers',
    });

    Company.belongsToMany(models.IndustryCategory, {
      through: 'CompaniesIndustryCategories',
      foreignKey: 'industryCategoryId',
      as: 'industryCategories',
    });
  };
  return Company;
};
