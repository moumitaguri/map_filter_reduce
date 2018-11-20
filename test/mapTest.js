const assert = require('assert');
const map = require('../src/library.js').map;

const mapLength = function(string){
  return string.length;
}

const testMapWithEmptyArray = function(){
  assert.deepEqual(map(mapLength,[]),[]);
}

const testMap = function(){
  testMapWithEmptyArray();
  console.log("test passed for empty array");
}

testMap();
