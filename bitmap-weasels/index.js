'use strict';

// const rf = require('./lib/read-write');
const tranf = require('./lib/transform');
const Bitmap = require('./lib/bitmap');
const fs = require('fs');



fs.readFile(`${__dirname}/assets/palette-bitmap.bmp`, (err, data) => {
  if(err) console.error(err);

  let bmp = new Bitmap(data);

  tranf.black(bmp);

  let fileContent = bmp.allData;


  let filePath = `./assets/${this.key}.bmp`;

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;

    console.log('The file was succesfully saved!');


  });
});
// console.log(grayArr)
