const {requireFilesFromDir} = require('../../../common/file/fileUtils');

let models = {};

requireFilesFromDir(__dirname, {
  excludedFileName: __filename,
  afterImport: function (fileName, importedFile) {
    models[fileName] = importedFile
  }
});

module.exports = models;
