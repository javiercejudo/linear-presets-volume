/*jshint node:true, mocha:true */

'use strict';

require('should');

var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var rescale = require('rescale')(Decimal).rescale;
var volume = require('linear-preset-factory')(require('../src/linear-presets-volume'));

function convert(x, preset) {
  return Number(rescale(preset[0], preset[1], x));
}

function invert(preset) {
  return preset.slice().reverse();
}

describe('volume presets', function() {
  it('should convert correctly', function() {
    (Math.PI * 4 / 3).should.be.exactly(convert(1e+6 * Math.PI * 4 / 3, invert(volume.cubicMetre_millilitre)), 'cubicMetre_millilitre')
      .and.exactly(convert(1e3 * Math.PI * 4 / 3, invert(volume.cubicMetre_litre)), 'cubicMetre_litre')
      .and.exactly(convert(255615.66152340596, invert(volume.cubicMetre_cubicInch)), 'cubicMetre_cubicInch')
      .and.exactly(convert(147.9257300482673, invert(volume.cubicMetre_cubicFoot)), 'cubicMetre_cubicFoot')
      .and.exactly(convert(147424.80522071107, invert(volume.cubicMetre_imperialFluidOunce)), 'cubicMetre_imperialFluidOunce')
      .and.exactly(convert(29484.96104414222, invert(volume.cubicMetre_imperialGill)), 'cubicMetre_imperialGill')
      .and.exactly(convert(7371.240261035554, invert(volume.cubicMetre_imperialPint)), 'cubicMetre_imperialPint')
      .and.exactly(convert(3685.6201305177774, invert(volume.cubicMetre_imperialQuart)), 'cubicMetre_imperialQuart')
      .and.exactly(convert(921.4050326294443, invert(volume.cubicMetre_imperialGallon)), 'cubicMetre_imperialGallon')
      .and.exactly(convert(1133118.7766232367, invert(volume.cubicMetre_USDram)), 'cubicMetre_USDram')
      .and.exactly(convert(141639.8470779046, invert(volume.cubicMetre_USFluidOunce)), 'cubicMetre_USFluidOunce')
      .and.exactly(convert(35409.96176947615, invert(volume.cubicMetre_USGill)), 'cubicMetre_USGill')
      .and.exactly(convert(17704.980884738074, invert(volume.cubicMetre_USCup)), 'cubicMetre_USCup')
      .and.exactly(convert(8852.490442369037, invert(volume.cubicMetre_USPint)), 'cubicMetre_USPint')
      .and.exactly(convert(4426.245221184518, invert(volume.cubicMetre_USQuart)), 'cubicMetre_USQuart')
      .and.exactly(convert(1106.5613052961296, invert(volume.cubicMetre_USGallon)), 'cubicMetre_USGallon');

    (0).should.be.exactly(convert(0, volume.cubicMetre_millilitre), 'cubicMetre_millilitre')
      .and.exactly(convert(0, volume.cubicMetre_litre), 'cubicMetre_litre')
      .and.exactly(convert(0, volume.cubicMetre_cubicInch), 'cubicMetre_cubicInch')
      .and.exactly(convert(0, volume.cubicMetre_cubicFoot), 'cubicMetre_cubicFoot')
      .and.exactly(convert(0, volume.cubicMetre_imperialFluidOunce), 'cubicMetre_imperialFluidOunce')
      .and.exactly(convert(0, volume.cubicMetre_imperialGill), 'cubicMetre_imperialGill')
      .and.exactly(convert(0, volume.cubicMetre_imperialPint), 'cubicMetre_imperialPint')
      .and.exactly(convert(0, volume.cubicMetre_imperialQuart), 'cubicMetre_imperialQuart')
      .and.exactly(convert(0, volume.cubicMetre_imperialGallon), 'cubicMetre_imperialGallon')
      .and.exactly(convert(0, volume.cubicMetre_USDram), 'cubicMetre_USDram')
      .and.exactly(convert(0, volume.cubicMetre_USFluidOunce), 'cubicMetre_USFluidOunce')
      .and.exactly(convert(0, volume.cubicMetre_USGill), 'cubicMetre_USGill')
      .and.exactly(convert(0, volume.cubicMetre_USCup), 'cubicMetre_USCup')
      .and.exactly(convert(0, volume.cubicMetre_USPint), 'cubicMetre_USPint')
      .and.exactly(convert(0, volume.cubicMetre_USQuart), 'cubicMetre_USQuart')
      .and.exactly(convert(0, volume.cubicMetre_USGallon), 'cubicMetre_USGallon');
  });
});
