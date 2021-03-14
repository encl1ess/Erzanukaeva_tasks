/*Task 2.2: Replace With Alphabet Position
Реализовать функцию, которая получив строку заменяет каждую букву
позицией в алфавите и возвращает полученный результат в виде строки.
Если что-то в тексте не является письмом, игнорируйте его и не
возвращайте.
*/
"use strict";
const CONST_CODE = 96;
const CONST_SPACE = " ";
const CONST_LETTER_ARRAY = "абвгдеёжзиклмнопрстуфхцчшщъыьэюя";
let alphabetPosition = (function() {

    return {
        firstWay: function(str) {
            str = str.toLowerCase().replace(/[^a-z-]/g, '');
            let result = "";
            for (let i in str) {
                result += str.charCodeAt(i) - CONST_CODE + CONST_SPACE;
            }
            return result;
        },
        secondWay: function(str) {}
    }
})()

// console.log("\nTask 2.2: \n" + alphabetPosition.firstWay("The sunset sets at twelve o' clock."));
console.log(alphabetPosition.firstWay("The sunset sets at twelve o' clock."));