const fs = require('fs');
const path = require('path');
const {DataTypes} = require('sequelize');
const sequelize = require('../connection/connection');

const basename = path.basename(__filename);

fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file));
        model(sequelize, DataTypes);
    });

module.exports = sequelize;
