/*Task 2.1: Array Diff
Реализовать функцию, которая вычитает один список из другого и возвращает результат.
Функция должна удалять все значения из списка а, которые присутствуют в b.Если значения 
есть в b, но нет в a, то значение игнорируется.
*/

function arrayDiff(a, b) {

    for (let i = 0; i < a.length; i++) {
        for (let j in b) {
            if (a[i] === b[j]) {
                a.splice(i, 1);
                i--;
            }

        }
    }
    console.log(a);
}

console.log("Task 2.1:");
arrayDiff([1, 2], [1]);
arrayDiff([1, 2, 2, 2, 3], [2]);
arrayDiff([1, 2, 2, 2, 3], [2, 9, 3, 99, -1]);


/*Task 2.2: Replace With Alphabet Position
Реализовать функцию, которая получив строку заменяет каждую букву
позицией в алфавите и возвращает полученный результат в виде строки.
Если что-то в тексте не является письмом, игнорируйте его и не
возвращайте.
*/

function alphabetPosition(str) {

    str = str.toLowerCase().replace(/[^a-z-]/g, '');
    let result = "";
    for (let i in str) {
        result += str.charCodeAt(i) - 96 + " ";
    }

    return result;
}
console.log("\nTask 2.2: \n" + alphabetPosition("The sunset sets at twelve o' clock."));

/*Task 2.3: Square Every Digit
Реализовать функцию, принимающая на вход число. Далее получает
квадрат каждого значения и возвращает результат числом.
 */

function squareEveryDigit(numb) {
    let str = "" + numb;
    let result = "";
    for (let i in str) {
        result += Math.pow(str[i], 2);
    }
    return console.log(result);
}
console.log("\nTask 2.3:");
squareEveryDigit(9119);
squareEveryDigit(323);
squareEveryDigit(101);