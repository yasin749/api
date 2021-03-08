/* Config */
const config = require('../../config');

// @todo delete this function
function imageFullPathUnifyer(sequelize, columnName = 'path') {
    return [
        sequelize.fn('CONCAT', config.mediaPath, sequelize.col(columnName)), 'path'
    ];
}

module.exports = {
    imageFullPathUnifyer,
}
