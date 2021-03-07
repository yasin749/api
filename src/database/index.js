const {Sequelize, DataTypes} = require('sequelize');
const Hooks = require('./hooks');

/* Models */
const models = require('./models');

/* Configs */
const {databaseConfig} = require('../config');

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
models.forEach(async model => {
    var createdModel = await model(sequelize, DataTypes);

    // @todo this is workaround
    if(createdModel.associate){
        createdModel.associate(sequelize.models);
    }
    if(createdModel.scope){
        createdModel.scope(sequelize.models);
    }
});

module.exports = sequelize;
