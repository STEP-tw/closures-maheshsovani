const makeFiboGenerator = undefined;

const compose = function(func1,func2){
  return function (args1,args2){
    let firstAns = func2(args1,args2);
    return func1(firstAns);
  }
}
const curry = function(func1,args1){
  return function(args2,args3){
    return func1(args1,args2,args3);
  }
}

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
