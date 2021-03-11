const {requireFilesFromDir} = require('../../file/fileUtils');

let models = [];

requireFilesFromDir(__dirname, {
  excludedFileName: __filename,
  afterImport: function (importedFile) {
    models.push(importedFile);
  }
});

module.exports = models;
