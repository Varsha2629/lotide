const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');


describe("#tail", () => {

  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    const input = ['Hello', 'Lighthouse', 'Labs'];
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(assertEqual(tail(input), expected));
  });

  it("returns 1 for ['Hello', 'Lighthouse', 'Labs']", () => {
    const input = ['Hello', 'Lighthouse', 'Labs'];
    const expected = 'Lighthouse';
    assert.deepEqual(assertEqual(tail(input[1]), expected));
  });

  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    const input = ['Hello', 'Lighthouse', 'Labs'];
    const expected = 'Labs';
    assert.deepEqual(assertEqual(tail(input[2]), expected));
  });


});
