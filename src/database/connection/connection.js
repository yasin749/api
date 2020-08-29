const Sequelize = require('sequelize');

/* Configs */
const {databaseConfig} = require('../../config');

let sequelize = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, databaseConfig);

sequelize
    .authenticate()
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
