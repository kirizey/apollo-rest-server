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
      ownerId: {
        type: Sequelize.INTEGER,
      },
      businessModelId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'BusinessModels',
          key: 'id'
        }
      },
      revenueId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Revenues',
          key: 'id'
        }
      },
      parentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Companies',
          key: 'id'
        }
      },
      companyStatusId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CompanyStatuses',
          key: 'id'
        }
      },
      companyTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CompanyTypes',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Companies');
  }
};