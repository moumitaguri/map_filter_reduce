const assert = require('assert');
const {filter} = require('../src/library.js');

const isEven = function(number){
  return number % 2 == 0;
}

describe('filter -> takes an array and predicate ,returns a new array', function(){
  it('should check for empty array', function(){
    assert.deepEqual(filter(isEven,[]),[]);
    assert.deepEqual(filter(isEven,[1]),[]);
    assert.deepEqual(filter(isEven,[2]),[2]);
  });
  it('should check for array having one element', function(){
    assert.deepEqual(filter(isEven,[]),[]);
  });
  it('should check for array having multiple element', function(){
    assert.deepEqual(filter(isEven,[1,1]),[]);
    assert.deepEqual(filter(isEven,[2,1]),[2]);
    assert.deepEqual(filter(isEven,[2,1,3,4,6]),[2,4,6]);
  });
});
