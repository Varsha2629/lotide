const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    const input = [1,2,3];
    const expected = 1;
    assert(head(input)) === (expected);
  });

  it("returns '5' for ['5']", () => {
    const input = ['5'];
    const expected = '5';
    assert(head(input)) === (expected);
  });

  it("returns 'Hello, Lighthouse, Labs' for 'Hello'", () => {
    const input = ['Hello , Ligthouse, Labs'];
    const expected = 'Hello';
    assert(head(input)) === (expected); 
  });



});



