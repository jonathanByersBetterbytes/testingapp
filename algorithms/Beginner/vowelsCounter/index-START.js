/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/
const vowels = ['a','e','i','o','u']
// pull out all the numbers from this string
function numCounter(text) {
    // Code goes here
    const cnt = text.match(/[1234567890]/gi)
    if(cnt) return cnt
    return 0
} 

console.log(numCounter('9te2xt5cou7n4t'))

//module.exports = vowelsCounter;



// function vowelsCounter(text) {
//     // Code goes here
//     const matches = text.match(/[aeiou]/gi)
//     if(matches) return matches.length
//     else return 0
// } 

// function vowelsCounter(text) {
//     // Code goes here
//     let cnt = 0
//     for(let char of text.toLowerCase()){
//         if(vowels.includes(char)) cnt++
//     }
//     return cnt
// }