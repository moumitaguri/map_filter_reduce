const assert = require('assert');
const filter = require('../src/library.js').filter;

const isEven = function(number){
  return number % 2 == 0;
}

const testFilter = function(){
  assert.deepEqual(filter(isEven,[]),[]);
}

testFilter();
