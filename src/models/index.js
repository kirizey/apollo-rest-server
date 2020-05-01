import Sequelize from 'sequelize';

require('dotenv').config();

const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

// eslint-disable-next-line import/prefer-default-export
export const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
  },
});

const models = {
  Company: sequelize.import('./Company'),
  Owner: sequelize.import('./Owner'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
