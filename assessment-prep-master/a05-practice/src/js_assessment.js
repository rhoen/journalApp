(function () {
  // Make a namespace `Assessment`.

  if (typeof Assessment === "undefined") {
    window.Assessment = {}
  }

  // write binarySearch(array, target)
  var binarySearch = Assessment.binarySearch = function(array, target) {
    if (array.length <= 1) {
      if (array[0] === target) {
        return 0
      }
      else {
        return -1;
      }
    }
    debugger
    var mid = Math.floor(array.length / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid + 1);

    if (array[mid] === target) {
      return mid;
    }
    else if (array[mid] > target) {
      return binarySearch(left, target);
    }
    else {
      var result = binarySearch(right, target);
      if (result < 0) {
        return -1;
      }
      else {
        return mid + result + 1;
      }
    }
  };

  // write nLengthSubstrings(string, n)
  var nLengthSubstrings = Assessment.nLengthSubstrings = function(string, n) {
    var result = [];
    for ( var i = 0; i < string.length; i++) {
      for (var j = i + 1; j <= string.length; j++) {
        if ( j - i === n  ) {
          result.push(string.slice(i, j))
        }
      }
    }
    return result ;
  };

  //
  // write myMap(array, callback)

  var myMap = Assessment.myMap = function(arr, callback) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }

    return result;
  };

  //
  // write primes(n)
  var primes = Assessment.primes = function(n) {
    var result = []

    var isPrime = function(num) {
      for (var i = 2; i < num; i++) {
        if (num % i === 0 ) {
          return false;
        }
      };
      return true;
    };
    var number = 2
    while (result.length < n) {
      if (isPrime(number)) {
        result.push(number);
      }
      number += 1
    };
    return result;
  };

  //
  // write myBind(context)
  Function.prototype.myBind = function(context) {
    var fn = this;
    var args = [].slice.call(arguments,1);
    return function() {
      var args2 = [].slice.call(arguments);
      return fn.apply(context, args.concat(args2));
    }
  };

  //
  // write inherits(ParentClass)
  Function.prototype.inherits = function (Parent) {
    var Surrogate = function() {};
    Surrogate.prototype = Parent.prototype;
    this.prototype = new Surrogate();
  };

})();
