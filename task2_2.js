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