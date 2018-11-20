const assert = require('assert');
const filter = require('../src/library.js').filter;

const isEven = function(number){
  return number % 2 == 0;
}

const testFilterWithOneElementInArray = function(){
  assert.deepEqual(filter(isEven,[]),[]);
  assert.deepEqual(filter(isEven,[1]),[]);
  assert.deepEqual(filter(isEven,[2]),[2]);
}

const testFilter = function(){
  testFilterWithOneElementInArray();
  console.log("tests are passed with single element in array");
}

testFilter();
