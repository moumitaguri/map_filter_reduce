const assert = require('assert');
const map = require('../src/library.js').map;

const mapLength = function(string){
  return string.length;
}

const isEven = function(number){
  return number % 2 == 0;
}

const testMapWithEmptyArray = function(){
  assert.deepEqual(map(mapLength,[]),[]);
  assert.deepEqual(map(isEven,[]),[]);
}


const testMapWithOneElement = function(){
  assert.deepEqual(map(mapLength,["thoughtworks"]),[12]);
  assert.deepEqual(map(isEven,[1]),[false]);
  assert.deepEqual(map(isEven,[2]),[true]);
}

const testMapWithMoreThanElement = function(){
  assert.deepEqual(map(mapLength,["a","ab","abc"]),[1,2,3]);
  assert.deepEqual(map(isEven,[2,1,3,0]),[true,false,false,true]);
}

const testMap = function(){
  testMapWithEmptyArray();
  console.log("test passed for empty array");
  testMapWithOneElement();
  console.log("test passed for array having one element") 
  testMapWithMoreThanElement();
  console.log("test passed for array having more than one element");
}

testMap();
