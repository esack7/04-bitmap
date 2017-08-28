'use strict';

const blarg = module.exports = {};

blarg.gray = (bmp) => {
  for (var i = 0; i < bmp.pixelArray.length; i+= 4) {
    var gray = (bmp.pixelArray[i] + bmp.pixelArray[i+1] + bmp.pixelArray[i+2])/3;
    bmp.pixelArray[i] = gray;
    bmp.pixelArray[i+1] = gray;
    bmp.pixelArray[i+2] = gray;
  }
};

blarg.invert = (bmp) => {
  for (var i = 0; i < bmp.pixelArray.length; i+= 4) {
    bmp.pixelArray[i] = 255 - bmp.pixelArray[i];
    bmp.pixelArray[i+1] = 255 - bmp.pixelArray[i+1];
    bmp.pixelArray[i+2] =255- bmp.pixelArray[i+2];
  }
};

blarg.black = (bmp) => {
  for (var i = 0; i < bmp.pixelArray.length; i+= 4) {
    bmp.pixelArray[i] = 0;
    bmp.pixelArray[i+1] = 0;
    bmp.pixelArray[i+2] = 0;
  }
};
