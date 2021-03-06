const filter = function(predicate,source){
  let outputArray = [];
  for(element of source){
    if(predicate(element)){
      outputArray.push(element);
    }
  }
  return outputArray;
}

exports.filter = filter;

const map = function(mapper,source){
  let outputArray = [];
  for(element of source){
    outputArray.push(mapper(element))
  }
  return outputArray;
}

exports.map = map;

const reduce = function(reducer,source,initialValue){
  if(initialValue == undefined){
    initialValue = source[0];
    source = source.slice(1);
  }
  let output = initialValue;
  for(element of source){
    output = reducer(output,element);
  }
  return output;
}

exports.reduce = reduce;
