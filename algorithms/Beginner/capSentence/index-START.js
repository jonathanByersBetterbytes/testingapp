/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 

USING MAP and SLICE!

*/

function capSentence(text) {
  // string of words
  // return cap first letter of all words
  // the tail of scotch => The Tail Of Scotch
  // split into words
  text = text.toLowerCase().split(' ')
  // cap first letter and slice remaining letters of the word and join the two into a map function to create a new array of words
  let newSentence = text.map(word => {
    return word[0].toUpperCase() + word.slice(1)
  })
  // join words with a space and return
  return newSentence.join(' ')
}
let result = capSentence('the tales of scotch!')
console.log(result)
document.querySelector('h2').innerText = result

// create an actionable button in javascript, make it say "hello"
const bigBut = document.createElement('button')
// put text
bigBut.textContent ='Click Me to Say Hello!'
// add event listener to say hello
bigBut.addEventListener('click', () => alert('Well Hello to You!'))
// add to page
bTon.appendChild(bigBut)


//module.exports = capSentence0


/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 

USING MAP and REPLACE!

*/

// function capSentence(text) {
//   // make all lowercase, split the string into words
//    let words = text.toLowerCase().split(' ')
//    // use .map to form a NEW array and replace the first letter with a capitalized 
//    let newSentence = words.map(word => {
//     return word.replace(word[0], word[0].toUpperCase())
//    })
//    //return joined newSentence
//    return newSentence.join(' ')
// }
/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 

USING MAP and SLICE!

*/

// function capSentence(text) {
//   // make all lowercase, split the string into words
//    let words = text.toLowerCase().split(' ')
//    // use .map to form a NEW array and put each word with capitalized first letter and join with the rest of the word
//    let newSentence = words.map(word => {
//     return word[0].toUpperCase() + word.slice(1)
//    })
//    //return joined newSentence
//    return newSentence.join(' ')
// }
// the For Each way
// function capSentence(text) {
//   // make all lowercase, split the string into words
//    let words = text.toLowerCase().split(' ')
//    let newSentence = []
//    // for each word capitalize first letter and join with the rest of the word
//    words.forEach(word => {
//     // push word into newSentence array
//     newSentence.push(word[0].toUpperCase() + word.slice(1))
//    })
//    //return joined newSentence
//    return newSentence.join(' ')
// }

// MY FIRST TAKE AT IT
// function capSentence(text) {
//   // split the string into words
//    let words = text.split(' ')
//    let newSentence = []
//    for(let word of words){
//     // split the words into chars
//     let chars = word.split('')
//     // capitalize first letter
//     chars[0] = chars[0].toUpperCase()
//     // join chars into words
//     word = chars.join('')
//     // join words into a sentence
//     newSentence.push(word)
//    }
//    return newSentence.join(' ')
// }