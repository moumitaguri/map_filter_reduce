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

const testFilterWithMoreThanOneElementInArray = function(){
  assert.deepEqual(filter(isEven,[1,1]),[]);
  assert.deepEqual(filter(isEven,[2,1]),[2]);
  assert.deepEqual(filter(isEven,[2,1,3,4,6]),[2,4,6]);
}

const testFilter = function(){
  testFilterWithOneElementInArray();
  console.log("tests are passed with single element in array");

  testFilterWithMoreThanOneElementInArray();
  console.log("tests are passed with more than one element in array");
}

testFilter();
