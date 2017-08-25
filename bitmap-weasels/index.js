'use strict';

// const rf = require('./lib/read-write');
// const tranf = require('./lib/transform');
const Bitmap = require('./lib/bitmap');
const fs = require('fs');

let arr = [];

fs.readFile(`${__dirname}/assets/palette-bitmap.bmp`, (err, data) => {
  if(err) console.error(err);

  let bmp = new Bitmap(data);

  arr.push(bmp.pixelArray);

  // for (var i = 0; i < bmp.pixelArray.length; i+= 4) {
  //   var gray = (bmp.pixelArray[i] + bmp.pixelArray[i+1] + bmp.pixelArray[i+2])/3
  //   bmp.pixelArray[i] = gray
  //   bmp.pixelArray[i+1] = gray
  //   bmp.pixelArray[i+2] = gray
  // }

  // for (var i = 0; i < bmp.pixelArray.length; i+= 4) {
  //   // var invert = (255-bmp.pixelArray[i] + bmp.pixelArray[i+1] + bmp.pixelArray[i+2])/3
  //   bmp.pixelArray[i] = 255 - bmp.pixelArray[i]
  //   bmp.pixelArray[i+1] = 255 - bmp.pixelArray[i+1]
  //   bmp.pixelArray[i+2] =255- bmp.pixelArray[i+2]
  // }

  for (var i = 0; i < bmp.pixelArray.length; i+= 4) {
    // var invert = (255-bmp.pixelArray[i] + bmp.pixelArray[i+1] + bmp.pixelArray[i+2])/3
    bmp.pixelArray[i] = 0
    bmp.pixelArray[i+1] = 0
    bmp.pixelArray[i+2] = 0
  }


  let fileContent = bmp.allData;

  let filePath = './assets/grayScaleOne.bmp';

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;

    console.log('The file was succesfully saved!');


  });
});
// console.log(grayArr)
