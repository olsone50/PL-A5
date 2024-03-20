/*
            Ethan Lenze
            Aidan Trusky
            Evan Olson
 */

var fp = require('./fp');

if ( ! exports ) {
    var exports = [ ];
}

var getHighSales = function (list, min, threshold) {
    var helper = function (list, k) {
      if (fp.isNull(list)) {
        k([]);
      } else {
        if (fp.isLT(fp.hd(list), min)) {
          console.log("You're fired!");
        } else {
          helper(fp.tl(list), function (result) {
            if (fp.isGT(fp.hd(list), threshold)) {
              console.log("call to 'fp.cons'");
              k(fp.cons(fp.hd(list), result));
            } else {
                k(result);
            }
          });
        }
      }
    };
  
    helper(list, function (result) {
      console.log(result);
    });
  };

 

// a few test cases

console.log("> getHighSales([20,12,13,14,11,15], 10, 13);");
getHighSales([20,12,13,14,11,15], 10, 13);
console.log("> getHighSales([20,12,13,14,11,15], 10, 20);");
getHighSales([20,12,13,14,11,15], 10, 20);
console.log("> getHighSales([20,12,13,14,9,15], 10, 13);");
getHighSales([20,12,13,14,9,15], 10, 13);
console.log("> getHighSales([14], 10, 13);");
getHighSales([14], 10, 13);



exports.getHighSales = getHighSales;
