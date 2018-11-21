const assert = require('assert');
const reduce = require('../src/library.js').reduce;

const sum = function(num1,num2){
  return num1+num2;
}

const findMax = function(num1,num2){
  return num1 > num2 ? num1 : num2;
}

const testReduceWithEmptyArray = function(){
  assert.equal(reduce(sum,2,[]),2);
  assert.equal(reduce(findMax,0,[]),0);
}

const testReduceWithOneElementInArray= function(){
  assert.equal(reduce(sum,2,[1]),3);
  assert.equal(reduce(findMax,0,[0]),0);
  assert.equal(reduce(findMax,0,[4]),4);
}

const testReduceWithMultipleElementInArray= function(){
  assert.equal(reduce(sum,2,[1,2]),5);
  assert.equal(reduce(findMax,0,[1,2]),2);
}

const testReduce = function(){
  testReduceWithEmptyArray();
  console.log("test passed for empty array");
  testReduceWithOneElementInArray();
  console.log("test passed for array having one element");
  testReduceWithMultipleElementInArray();
  console.log("test passed for array having multiple element");
}

testReduce();
