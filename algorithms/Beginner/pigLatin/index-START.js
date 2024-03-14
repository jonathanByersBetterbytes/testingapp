/* CHALLENGE
Translate the provided string to Pig Latin by following the rules below:
    * For words that begin with consonant sounds, the consonant before the initial vowel 
    should be moved to the end of the word sequence and "ay" affixed. E.g.: "pig" = "igpay"
    * For words that begin with consonant clusters, the clusters should be moved to the 
    end of the word sequence and "ay" affixed. E.g: "glove" = "oveglay"
    * For words that begin with vowel sounds, simply add "way" to the end of the word. 
    E.g: "explain" = "explainway”
*/
// word
// rt word in piglatin
// 'listen' => 'istenlay'

// DOES NOT WORK! See if you can figure it out later
function makePiglatinBroken(str) {    
    return str
    .replace(/^([aeiouy])(._)/, '$1$2way')
    .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}

function makePiglatin(word) {    
    word = word.toLowerCase()  // convert to lowercase    
    const arrVow = ['a','e','i','o','u']  // create an array of vowels    
    if(arrVow.includes(word[0])) return word += 'way'  // test if first letter is a consonat or vowel. If vowel, add 'way' to the end
    else {
        for(i in word) {
            if(arrVow.includes(word[i])){ // find first vowel
                return word.slice(i) + word.slice(0,i) + 'ay' // chop all consonates up to vowel and place at the end of the word adding 'ay' to the end
            }
        }        
    }
}
let result = makePiglatin('ilent')
console.log(result)
document.querySelector('h2').innerText = result


// module.exports = isAnagram


// DOES NOT WORK! See if you can figure it out later
// function makePiglatin(str) {    
//     return str
//     .replace(/^([aeiouy])(._)/, '$1$2way')
//     .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
// }
// function makePiglatin2(word) {
//     // convert to lowercase
//     word = word.toLowerCase()
//     // create an array of vowels
//     const arrVow = ['a','e','i','o','u']
//     // test if first letter is a consonat or vowel. If vowel, add 'way' to the end
//     if(arrVow.includes(word[0])) word += 'way'
//     else {
//         // find first vowel
//         let vowelIndex = 0
//         for(i in word) {
//             if(arrVow.includes(word[i])){
//                 vowelIndex = i
//                 break
//             }
//         }
//         word = word.slice(vowelIndex) + word.slice(0,vowelIndex) + 'ay'
//     }
//     // if consonate, continue testing next letter until you hit a vowel

//     // chop all consonates up to vowel and place at the end of the word adding 'ay' to the end
//     return word
// }