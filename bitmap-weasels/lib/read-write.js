'use strict';
const readWrite = module.exports = {};

const tranf = require('./transform');
const Bitmap = require('./bitmap');
const fs = require('fs');

let bmp;

readWrite.read = function() {
  fs.readFile(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
    if(err) console.error(err);
    bmp = new Bitmap(data);
    tranf.invert(bmp);
    // tranf.gray(bmp);
    // tranf.black(bmp);
    readWrite.write();
  });
};


readWrite.write = function() {
  let fileContent = bmp.allData;
  let filePath = `./assets/${Object.keys(tranf)}.bmp`;
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log('The file was succesfully saved!');
  });
};
