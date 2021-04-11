const {Sequelize, DataTypes} = require('sequelize');
const Hooks = require('./hooks');

/* Models */
const models = require('./models');

/* Configs */
const {databaseConfig} = require('../../config');

// Create sequelize instance
let sequelize = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, databaseConfig);

// Initialize database hooks
Hooks.init(sequelize);

// Sequelize authenticate
sequelize
  .authenticate()
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Attach all models to sequelize
const loadedModels = Object.keys(models).reduce((allModels, modelName) => {
  allModels[modelName] = models[modelName](sequelize, DataTypes);
  return allModels;
}, {});

// Run associates
Object.keys(loadedModels).map(modelName => {
  const model = loadedModels[modelName];
  if (model.associate) {
    model.associate(sequelize.models);
  }
  return modelName;
});

// Run scopes
Object.keys(loadedModels).map(modelName => {
  const model = loadedModels[modelName];
  if (model.scope) {
    model.scope(sequelize.models);
  }
  return modelName;
});

module.exports = sequelize;
