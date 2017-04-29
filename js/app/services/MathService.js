function MathService() {
 this.sum = function(array){
   return array.reduce((a,b)=>{return a+b}, 0)
  };
}

angular
    .module('app')
    .service('MathService', MathService);

// Your code here!

// 