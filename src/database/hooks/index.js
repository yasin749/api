const {requireFilesFromDir} = require('../../file/fileUtils');

function init(database) {
  requireFilesFromDir(__dirname, {
    excludedFileName: __filename,
    afterImport: function (fileName, importedFile) {
      importedFile(database);
    }
  });
}

module.exports = {
  init,
}
