const curry = undefined;
const compose = undefined;
const makeFiboGenerator = undefined;

const makeDeltaTracker = function(number){
  let object = {old:number,delta:0,new:number};
  const tracker = function(number2){
    number = object.new;
    if(number2 > 0){
      return object = {old:number,delta:number2,new:number+number2};
    }
    if(number2 < 0){
      return object = {old:number,delta:number2,new:number+number2};
    } else{
      return object ={old:number,delta:0,new:number};
    }
  }
  return tracker;
}

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
