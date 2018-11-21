const assert = require('assert');
const map = require('../src/library.js').map;

const mapLength = function(string){
  return string.length;
}

const isEven = function(number){
  return number % 2 == 0;
}
describe('map -> takes an array and returns a new array of same length',function(){
  it('for empty array', function(){
    assert.deepEqual(map(mapLength,[]),[]);
  });
  it('for array having one element', function(){
    assert.deepEqual(map(mapLength,["thoughtworks"]),[12]);
  });
  it('for array having multiple element', function(){
    assert.deepEqual(map(mapLength,["a","ab","abc"]),[1,2,3]);
  });
});
