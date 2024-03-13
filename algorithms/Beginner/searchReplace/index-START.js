// Receiving a sentence, a word in the sentence and a replacement 
// for that word as arguments, perform a search and replace on the 
// sentence using the arguments provided and return the new sentence. E.g

// searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"
// Note: Make sure to match the casing(capitalization) of the string to be replaced as shown above.

// sentence, word, replaceWord
// new sentence with word replaced, match the case of word to be replaced
// "He is Sitting", 'Sitting", "sleeping" => "He is Sleeping"


function searchReplace(sent,word,replace){
    // check for capitalized first letter of word to be replaced
    if(word[0] === word[0].toUpperCase()){
        // capitalize the first letter of the replacement word if so
        // join the first letter of replacement word with the rest of the word
        replace = replace[0].toUpperCase() + replace.slice(1)
    }
    // return the new sentence with word replaced
    return sent.replace(word, replace)
}

let result = searchReplace('raceicar racer Fails to pass the development test', 'Fails','succeeds')
console.log(result)
document.querySelector('h2').innerText = result



// // solve with RegEx
// function searchReplace(sent, word, replace){    
//     // declare a new RegEx object from the word to replace
//     let regExWord = new RegExp(word,'gi')
//     // check if the first letter of word to replace is capitalized
//     // if it is then capitalize first letter of replacement word
//     // create a new replacement word by joining the capitalized letter with the rest of the replacement word
//     if(/[A-Z]/.test(word[0])) replace = replace[0].toUpperCase()+replace.slice(1)
//     // return the new sentence by replacing old word
//     return sent.replace(regExWord, replace)
// }