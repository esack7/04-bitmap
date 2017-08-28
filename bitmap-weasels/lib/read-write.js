'use strict';
const readWrite = module.exports = {};

const tranf = require('./transform');
const Bitmap = require('./bitmap');
const fs = require('fs');

readWrite.bmp;
readWrite.nameKeyThing;

readWrite.read = () => {
  fs.readFile(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
    if(err) console.error(err);
    readWrite.bmp = new Bitmap(data);
    readWrite.black();
    fs.readFile(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
      if(err) console.error(err);
      readWrite.bmp = new Bitmap(data);
      readWrite.gray();
      fs.readFile(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
        if(err) console.error(err);
        readWrite.bmp = new Bitmap(data);
        readWrite.invert();
      });
    });
  });
};

readWrite.write = (fileContent, filePath) => {
  fileContent = readWrite.bmp.allData;
  filePath = `./assets/${readWrite.nameKeyThing}.bmp`;
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log(`Created a Bitmap!`);
  });
};

readWrite.black = () => {
  readWrite.nameKeyThing = Object.keys(tranf)[2];
  tranf.black(readWrite.bmp);
  readWrite.write();
};

readWrite.invert = () => {
  readWrite.nameKeyThing = Object.keys(tranf)[1];
  tranf.invert(readWrite.bmp);
  readWrite.write();
};

readWrite.gray = () => {
  readWrite.nameKeyThing = Object.keys(tranf)[0];
  tranf.gray(readWrite.bmp);
  readWrite.write();
};
