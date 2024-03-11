/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

// testing if half of conditions are true for optimization
function palindromeChecker(text) {
    let arrChars = text.toLowerCase().split('')
    for(let i=0;i<arrChars.length/2;i++){
        if(arrChars[i] !== text[arrChars.length - i -1]) 
            return false
    }
    return true
}
let result = palindromeChecker('raceicar')
console.log(result)
document.querySelector('h2').innerText = result


module.exports = palindromeChecker;

// testing if all conditions are true with the .every function
// function palindromeCs

// testing if all conditions are true with the .every function
// function palindromeChecker(text) {
//     let arrChars = text.toLowerCase().split('')
//     let res = arrChars.every((char, i) => {
//         console.log(char === text[text.length - i - 1])
//         return char === text[text.length - i - 1]
//     })
//     return res
// }

// chaining
// function palindromeChecker(text) {
//     return text.toLowerCase().split('').reverse().join('') === text
// }