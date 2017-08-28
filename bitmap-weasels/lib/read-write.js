'use strict';
const readWrite = module.exports = {};

const tranf = require('./transform');
const Bitmap = require('./bitmap');
const fs = require('fs');

readWrite.bmp;
readWrite.nameKeyThing;

readWrite.read = function() {
  fs.readFile(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
    if(err) console.error(err);
    readWrite.bmp = new Bitmap(data);
    console.log(readWrite.bmp);
    readWrite.black();
    fs.readFile(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
      if(err) console.error(err);
      readWrite.bmp = new Bitmap(data);
      console.log(readWrite.bmp);
      readWrite.gray();
      fs.readFile(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
        if(err) console.error(err);
        readWrite.bmp = new Bitmap(data);
        console.log(readWrite.bmp);
        readWrite.invert();
      });
    });
  });
};

readWrite.write = function(fileContent, filePath) {
  fileContent = readWrite.bmp.allData;
  filePath = `./assets/${readWrite.nameKeyThing}.bmp`;
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log('The file was succesfully saved!');
  });
};

readWrite.black = function(){
  readWrite.nameKeyThing = Object.keys(tranf)[2];
  console.log('1', readWrite.nameKeyThing);
  tranf.black(readWrite.bmp);
  readWrite.write();
};

readWrite.gray = function(){
  readWrite.nameKeyThing = Object.keys(tranf)[1];
  console.log('2', readWrite.nameKeyThing);
  tranf.gray(readWrite.bmp);
  readWrite.write();
};

readWrite.invert = function(){
  readWrite.nameKeyThing = Object.keys(tranf)[0];
  console.log('1', readWrite.nameKeyThing);
  tranf.invert(readWrite.bmp);
  readWrite.write();
};
