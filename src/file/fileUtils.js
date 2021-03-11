const fs = require('fs');
const path = require('path');

function readdirSync(dirname, excludedFileName) {
  const allowedFile = '.js';

  dirname = path.resolve(dirname);
  excludedFileName = path.basename(excludedFileName);

  return fs.readdirSync(dirname)
    .filter(file => {
      return file.indexOf('.') !== 0 &&
        file !== excludedFileName &&
        file.slice(-3) === allowedFile;
    });
}

function requireFileList(dirname, fileList, afterImport) {
  fileList.forEach(file => {
    const importedFile = require(path.join(dirname, file));

    if (afterImport) {
      afterImport(importedFile);
    }
  })
}

function requireFilesFromDir(dirname, options) {
  const {
    excludedFileName,
    afterImport,
  } = options;

  const fileList = readdirSync(dirname, excludedFileName);
  requireFileList(dirname, fileList, afterImport);
}

module.exports = {
  readdirSync,
  requireFileList,
  requireFilesFromDir,
}
