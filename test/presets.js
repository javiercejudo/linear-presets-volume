/*jshint node:true, mocha:true */

'use strict';

require('should');

var rescale = require('rescale')(require('floating-adapter')).rescale;
var volume = require('../src/linear-presets-volume');

function convert(x, preset) {
  return rescale(x, preset[0], preset[1]);
};

function invert(preset) {
  return preset.slice(0).reverse();
};

describe('volume presets', function() {
  it('should convert correctly', function() {
    (Math.PI * 4 / 3).should.be.exactly(convert(1e+6 * Math.PI * 4 / 3, invert(volume.cubicMetreToMillilitre)), 'cubicMetreToMillilitre')
      .and.exactly(convert(1e3 * Math.PI * 4 / 3, invert(volume.cubicMetreToLitre)), 'cubicMetreToLitre')
      .and.exactly(convert(255615.66152340596, invert(volume.cubicMetreToCubicInch)), 'cubicMetreToCubicInch')
      .and.exactly(convert(147.9257300482673, invert(volume.cubicMetreToCubicFoot)), 'cubicMetreToCubicFoot')
      .and.exactly(convert(147424.80522071107, invert(volume.cubicMetreToImperialFluidOunce)), 'cubicMetreToImperialFluidOunce')
      .and.exactly(convert(29484.96104414222, invert(volume.cubicMetreToImperialGill)), 'cubicMetreToImperialGill')
      .and.exactly(convert(7371.240261035554, invert(volume.cubicMetreToImperialPint)), 'cubicMetreToImperialPint')
      .and.exactly(convert(3685.6201305177774, invert(volume.cubicMetreToImperialQuart)), 'cubicMetreToImperialQuart')
      .and.exactly(convert(921.4050326294443, invert(volume.cubicMetreToImperialGallon)), 'cubicMetreToImperialGallon')
      .and.exactly(convert(1133118.7766232367, invert(volume.cubicMetreToUSDram)), 'cubicMetreToUSDram')
      .and.exactly(convert(141639.8470779046, invert(volume.cubicMetreToUSFluidOunce)), 'cubicMetreToUSFluidOunce')
      .and.exactly(convert(35409.96176947615, invert(volume.cubicMetreToUSGill)), 'cubicMetreToUSGill')
      .and.exactly(convert(17704.980884738074, invert(volume.cubicMetreToUSCup)), 'cubicMetreToUSCup')
      .and.exactly(convert(8852.490442369037, invert(volume.cubicMetreToUSPint)), 'cubicMetreToUSPint')
      .and.exactly(convert(4426.245221184518, invert(volume.cubicMetreToUSQuart)), 'cubicMetreToUSQuart')
      .and.exactly(convert(1106.5613052961296, invert(volume.cubicMetreToUSGallon)), 'cubicMetreToUSGallon');

    (0).should.be.exactly(convert(0, volume.cubicMetreToMillilitre), 'cubicMetreToMillilitre')
      .and.exactly(convert(0, volume.cubicMetreToLitre), 'cubicMetreToLitre')
      .and.exactly(convert(0, volume.cubicMetreToCubicInch), 'cubicMetreToCubicInch')
      .and.exactly(convert(0, volume.cubicMetreToCubicFoot), 'cubicMetreToCubicFoot')
      .and.exactly(convert(0, volume.cubicMetreToImperialFluidOunce), 'cubicMetreToImperialFluidOunce')
      .and.exactly(convert(0, volume.cubicMetreToImperialGill), 'cubicMetreToImperialGill')
      .and.exactly(convert(0, volume.cubicMetreToImperialPint), 'cubicMetreToImperialPint')
      .and.exactly(convert(0, volume.cubicMetreToImperialQuart), 'cubicMetreToImperialQuart')
      .and.exactly(convert(0, volume.cubicMetreToImperialGallon), 'cubicMetreToImperialGallon')
      .and.exactly(convert(0, volume.cubicMetreToUSDram), 'cubicMetreToUSDram')
      .and.exactly(convert(0, volume.cubicMetreToUSFluidOunce), 'cubicMetreToUSFluidOunce')
      .and.exactly(convert(0, volume.cubicMetreToUSGill), 'cubicMetreToUSGill')
      .and.exactly(convert(0, volume.cubicMetreToUSCup), 'cubicMetreToUSCup')
      .and.exactly(convert(0, volume.cubicMetreToUSPint), 'cubicMetreToUSPint')
      .and.exactly(convert(0, volume.cubicMetreToUSQuart), 'cubicMetreToUSQuart')
      .and.exactly(convert(0, volume.cubicMetreToUSGallon), 'cubicMetreToUSGallon');
  });
});
