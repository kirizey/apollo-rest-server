'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      legalName: {
        type: Sequelize.STRING
      },
      abbrName: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.INTEGER
      },
      employeesNumber: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      photos: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      web: {
        type: Sequelize.STRING
      },
      foundationDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      contactsIds: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
      },
      ownerId: {
        type: Sequelize.INTEGER
      },
      companyTypeId: {
        type: Sequelize.INTEGER
      },
      revenueId: {
        type: Sequelize.INTEGER
      },
      parentId: {
        type: Sequelize.INTEGER
      },
      researchIds: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
      },
      companyStatusId: {
        type: Sequelize.INTEGER,
      },
      businessModelId: {
        type: Sequelize.INTEGER,
      },
      industryCategoriesIds: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
      },
      buyers_ids: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Companies');
  }
};