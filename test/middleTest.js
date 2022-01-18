const assert = require('chai').assert;

const middle = require('../middle');


describe("#middle", () => {

  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    const input = [1, 2, 3, 4, 5];
    const expected = 3;
    assert.deepEqual(middle(input), expected);
  });

  it("returns 2.5 for [1, 2, 3, 4]", () => {
    const input = [1, 2, 3, 4];
    const expected = 2;
    assert.deepEqual(middle(input).length, expected);
  });

  it("returns [2,3] for [1, 2, 3, 4]", () => {
    const input = [1, 2, 3, 4];
    const expected = [2, 3];
    assert.deepEqual(middle(input), expected);
  });

});

// console.log(middle([1, 2, 3, 4, 5]))
// console.log(middle([1, 2, 3, 4]));
// assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);