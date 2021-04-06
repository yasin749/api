const express = require('express');
const router = express.Router();

const {requireFilesFromDir} = require('../common/file/fileUtils');

requireFilesFromDir(__dirname, {
  excludedFileName: __filename,
  afterImport: function (fileName, importedFile) {
    importedFile(router);
  }
});

module.exports = router;
