const assert = require('assert');
const reduce = require('../src/library.js').reduce;

const sum = function(num1,num2){
  return num1+num2;
}

const findMax = function(num1,num2){
  return num1 > num2 ? num1 : num2;
}
describe('reduce -> take an array and returns an integer value',function(){
  it('for empty array', function(){
    assert.equal(reduce(sum,2,[]),2);
    assert.equal(reduce(findMax,0,[]),0);
  });
  it('for array of one element', function(){
    assert.equal(reduce(sum,2,[1]),3);
    assert.equal(reduce(findMax,0,[0]),0);
    assert.equal(reduce(findMax,0,[4]),4);
  });
  it('for array of multiple elements', function(){
    assert.equal(reduce(sum,2,[1,2]),5);
    assert.equal(reduce(findMax,0,[1,2]),2);
  });
});
