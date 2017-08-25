'use strict';

// const rf = require('./lib/read-write');
// const tranf = require('./lib/transform');
const Bitmap = require('./lib/bitmap');
const fs = require('fs');

let arr = [];

fs.readFile(`${__dirname}/assets/palette-bitmap.bmp`, (err, data) => {
  if(err) console.error(err);

  let bmp = new Bitmap(data);


  // (err, data) => {
  //   if(err) console.error(err);
  //   for(var i = 0; i< arr.length; i+=4) {
  //     arr.push(bmp.pixelArray.splice(0,4));
  //   }
  //   console.log(data);
  //   (err, data) => {
  //     if(err) console.error(err);
  //     console.log(data);
  //     console.log(arr);
  //   };
  // };
  // console.log(bmp);

  // arr.push(bmp.pixelArray);
  // console.log('Here is the array - ', arr);
  // console.log('i am a bmp', bmp);
  arr.push(bmp.pixelArray);
  console.log('array', arr);
  let x = [];
  for (var i = 0; i < bmp.pixelArray.length; i+= 4) {
    // console.log(bmp.pixelArray[i], bmp.pixelArray[i+1], bmp.pixelArray[i+2], bmp.pixelArray[i+3]);

    let chunks = [bmp.pixelArray[i], bmp.pixelArray[i+1], bmp.pixelArray[i+2], bmp.pixelArray[i+3]];
    x.push(chunks);
  }
  console.log('here are chunks', x);
  // console.log(x.map());
  let grayArr = [];
  x.forEach(ele => {
    ele.forEach(itx => {
      if(itx === 0) grayArr.push(itx);
      else{
        grayArr.push(Math.floor((ele.reduce((acc, cur) => acc + cur))/3));
      }
    });
  });

  console.log(grayArr);

  // let hex = Buffer.from(grayArr).toString('hex');
  // console.log(hex);
});
