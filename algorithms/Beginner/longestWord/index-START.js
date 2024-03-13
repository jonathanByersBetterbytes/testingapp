/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// string sentense
// return longest word
// 'raceicar racer fails to pass the development test' => 'development'

//using reduce and a function expresion
const longestWord = (sent) => sent.split(' ').reduce((maxLenWord, word) => {
    if(word.length > maxLenWord.length) return word
    else return maxLenWord
})

let result = longestWord('raceicar racer fails to pass the development test')
console.log(result)
document.querySelector('h2').innerText = result

//module.exports = longestWord



// using reduce and a function expresion
// const longestWord = (sent) => sent.split(' ').reduce((maxLenWord, word) => {
//     if(word.length > maxLenWord.length) return word
//     else return maxLenWord
// })

// using for loop
// function longestWord(text) {
//     // split the sentense into words array
//     let wordsArr = text.split(' ')
//     // set max length and result vars
//     let maxLen = 0
//     let result = ''
//     // loop through all words to find maximum length encountered, set max len and result if len > max
//     wordsArr.forEach(word => {
//         if(word.length > maxLen){
//             maxLen = word.length
//             result = word
//         }
//     })
//     // return result
//     return result
// }

// using sort and a function expresion
// const longestWord = (sent) => sent.split(' ').sort((wordA,wordB) => wordB.length - wordA.length)[0]