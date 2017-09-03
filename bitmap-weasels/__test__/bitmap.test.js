'use strict';

const Bitmap = require('../lib/bitmap');
const fs = require('fs');

describe('Testing the Bitmap Constructor', function() {
  beforeAll(done => {
    fs.readFile(`${__dirname}/../assets/palette-bitmap.bmp`, (err, data) => {
      if(err) console.error(err);
      this.bmp = new Bitmap(data);
      done();
    });
  });
  describe('default properties', () => {
    test('should have a allData property', done => {
      expect(this.bmp).toHaveProperty('allData');
      done();
    });
    test('allData should a value of a raw Buffer', done => {
      expect(this.bmp.allData).toBeInstanceOf(Buffer);
      done();
    });
    test('should have a Type property of "Bm"', done => {
      expect(this.bmp).toHaveProperty('type');
      expect(this.bmp.type).toBe('BM');
      done();
    });
    test('should have a property of fileSize', done => {
      expect(this.bmp).toHaveProperty('fileSize');
      done();
    });
    test('should have a property of offset', done => {
      expect(this.bmp).toHaveProperty('offset');
      done();
    });
    test('should have a property of width', done => {
      expect(this.bmp).toHaveProperty('width');
      done();
    });
    test('should have a property of height', done => {
      expect(this.bmp).toHaveProperty('height');
      done();
    });
    test('should have a property of pixelArray', done => {
      expect(this.bmp).toHaveProperty('pixelArray');
      done();
    });
  });
});
