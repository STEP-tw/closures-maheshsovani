const makeConstant = undefined;
const makeDeltaTracker = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

const makeFiboGenerator = function (num1,num2){
  let lastSecondTerm = num1;
  let previousTerm = num2;
  let currentTerm = 0;
  const fibo = function(){
    currentTerm = previousTerm+lastSecondTerm;
    lastSecondTerm = previousTerm;
    previousTerm = currentTerm;
    return(currentTerm);
  }
  return fibo;
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
