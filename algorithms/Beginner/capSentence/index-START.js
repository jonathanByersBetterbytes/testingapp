/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
  // make all lowercase, split the string into words
   let words = text.toLowerCase().split(' ')
   let newSentence = []
   // for each word capitalize first letter and join with the rest of the word
   words.forEach(word => {
    word = word[0].toUpperCase() + word.slice(1)
    // push word into newSentence array
    newSentence.push(word)
   })
   //return joined newSentence
   return newSentence.join(' ')
}

console.log(capSentence('the tales of scotch!'))

//module.exports = capSentence


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