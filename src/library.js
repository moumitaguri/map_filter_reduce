const filter = function(inputFunction,inputArray){
  let outputArray = [];
  for(element of inputArray){
    if(inputFunction(element)){
      outputArray.push(element);
    }
  }
  return outputArray;
}

exports.filter = filter;

const map = function(inputFunction,inputArray){
  let outputArray = [];
  for(element of inputArray){
    outputArray.push(inputFunction(element))
  }
  return outputArray;
}

exports.map = map;

const reduce = function(inputFunction,initialValue,inputArray){
  let output = initialValue;
  for(element of inputArray){
    output = inputFunction(output,element);
  }
  return output;
}

exports.reduce = reduce;
