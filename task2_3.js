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