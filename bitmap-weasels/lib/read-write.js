'use strict';
const readWrite = module.exports = {};

const tranf = require('./transform');
const Bitmap = require('./bitmap');
const fs = require('fs');

let bmp;
let nameKeyThing;

readWrite.read = function() {
  fs.readFile(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
    if(err) console.error(err);
    bmp = new Bitmap(data);
    (function(){
      nameKeyThing = Object.keys(tranf)[0]
      console.log('1', nameKeyThing)
      tranf.invert(bmp)
    })();
    (function(){
      nameKeyThing = Object.keys(tranf)[1]
      console.log('2', nameKeyThing)
      tranf.gray(bmp)
    })();
    // (function(){
    //   nameKeyThing = Object.keys(tranf)[2]
    //   console.log('1', nameKeyThing)
    //   tranf.black(bmp)
    //   readWrite.write();
    // })();

    // tranf.invert(bmp);
    // tranf.gray(bmp);
    // readWrite.write();
    // tranf.black(bmp);
    // readWrite.write();
  });
};


readWrite.write = function() {
  let fileContent = bmp.allData;
  let filePath = `./assets/${nameKeyThing}.bmp`;
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log('The file was succesfully saved!');
  });
};
