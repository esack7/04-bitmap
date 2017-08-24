'use strict';

const rf = require('./lib/bitmap');
const tranf = require('./lib/transform');
const Bitmap = require('./lib/bitmap');
const fs = require('fs');

let arr = [];

fs.readFile(`${__dirname}/assets/palette-bitmap.bmp`, (err, data) => {
  if(err) console.error(err)

  let bmp = new Bitmap(data)

  // console.log(bmp);
  arr.push(bmp.pixelArray);
})
