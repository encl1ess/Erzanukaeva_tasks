/*Task 2.1: Array Diff
Реализовать функцию, которая вычитает один список из другого и возвращает результат.
Функция должна удалять все значения из списка а, которые присутствуют в b.Если значения 
есть в b, но нет в a, то значение игнорируется.
*/
"use strict";

let arrayDiff = (function() {

        return {
            firstWay: function(a, b) {

            },
            secondWay: function(a, b) {

            }
        }
    })()
    // function arrayDiff(a, b) {

//     for (let i = 0; i < a.length; i++) {
//         for (let j in b) {
//             if (a[i] === b[j]) {
//                 a.splice(i, 1);
//                 i--;
//             }

//         }
//     }
//     console.log(a);
// }

// console.log("Task 2.1:");
// arrayDiff([1, 2], [1]);
// arrayDiff([1, 2, 2, 2, 3], [2]);
// arrayDiff([1, 2, 2, 2, 3], [2, 9, 3, 99, -1]);