"use strict";
let squareEveryDigit = (function() {

    return {
        firstWay: function(numb) {
            let str = "" + numb;
            let result = "";
            for (let i in str) {
                result += Math.pow(str[i], 2);
            }
            return result;
        }
    }
})()

console.log("\nTask 2.3:");
console.log(squareEveryDigit.firstWay(9119));
console.log(squareEveryDigit.firstWay(323));
console.log(squareEveryDigit.firstWay(101));