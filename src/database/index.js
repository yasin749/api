const {Sequelize, DataTypes} = require('sequelize');

/* Models */
const models = require('./models');

/* Configs */
const {databaseConfig} = require('../config');

// Create sequelize instance
let sequelize = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, databaseConfig);

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
    createdModel.associate(sequelize.models);
});

// Sync all models (exist for development, use migrations on production)
// @todo refactor sync key
if (process.env.npm_config_sync) {
    sequelize.sync();
}

module.exports = sequelize;
