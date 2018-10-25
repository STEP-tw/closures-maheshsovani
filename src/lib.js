const curry = undefined;
const compose = undefined;
const makeFiboGenerator = undefined;
const makeDeltaTracker = undefined;

const makeCycler = function(array){
  let newArray = array.slice(0);
  let count = -1;
  const cycler = function(){
    count = count +1;
    if(count == newArray.length){
      count = 0
    }
    return newArray[count]
  }
  return cycler;
}

const makeConstant = function (argument){
  return function (){
    return argument;
  }
}

const makeCounterFromZero=function(){
  let counter = 0;
  return function(){
    return counter ++;
  }
}

const makeCounterFromN=function(counterStartNumber){
  let counter = counterStartNumber;
  return function(){
    return counter ++;
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
