const makeFiboGenerator = function (firstNum,secondNum){
  if(!firstNum  && !secondNum){
    firstNum=0;
    secondNum=1;
  }
  if(!secondNum){
    secondNum = firstNum;
    firstNum = 0;
  }
  return function(){
    let result = firstNum;
    let sum  = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = sum;
    return result;
  }
}

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
  return function(number2){
    if(!number2){number2=0}
    let object = {old:number,delta:number2,new:number+number2}
    number = number + number2;
    return object;
  }
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
