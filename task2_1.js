"use strict";

let arrayDiff = (function() {

    return {
        firstWay: function(a, b) {
            b.forEach(i => {
                let j = a.indexOf(i);
                while (j != -1) {
                    a.splice(j, 1);
                    j = a.indexOf(i);
                }

            })
            console.log(a);
        },
        secondWay: function(a, b) {

        }
    }

})()


console.log("Task 2.1:");
arrayDiff.firstWay([1, 2], [1]);
arrayDiff.firstWay([1, 2, 2, 2, 3], [2]);
arrayDiff.firstWay([1, 2, 2, 2, 3], [2, 9, 99, -1]);