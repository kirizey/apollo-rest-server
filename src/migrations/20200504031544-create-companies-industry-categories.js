'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CompaniesIndustryCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyId: {
       type: Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Companies',
          key: 'id'
        }
      },
      industryId: {
       type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'IndustryCategories',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CompaniesIndustryCategories');
  }
};