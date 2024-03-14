/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/
// two words
// are they anograms?
// 'listen' => 'silent' === true
// with character map
function isAnagram(stringA, stringB) {
    // create a charMap funct
    const createCharMap = str => {
        // create an object
        const charMap = {}    
        // loop through object and check if hasOwnProperty, increment if so, initialize with 1 if not
        for(char of str){
            if(charMap.hasOwnProperty(char)) charMap[char]++
            else charMap[char] = 1
        }
        // return map
        return charMap
    }
    // are two strings same length? return false if not
    if(stringA.length === stringB.length){
        // create char maps for each word
        const charMapA = createCharMap(stringA)
        const charMapB = createCharMap(stringB)
        // loop through one map checking if both charMaps are the same, return false if not
        for(i in charMapA)
            if(charMapA[i] !== charMapB[i])
                return false
        // return true if same
        return true
    }else return false
}

let result = isAnagram('listen','silent')
console.log(result)
document.querySelector('h2').innerText = result


// module.exports = isAnagram

// with RegEx
// function isAnagram(stringA, stringB) {
//     // write a funtion to clean the strings 
//     // split, sort, and join
//     const sanitizeStr = str => str.toLowerCase()
//                               .replace(/[^a-z\d]/g, '')
//                               .split('').sort().join('')
//     // return are they the same?
//     return sanitizeStr(stringA) == sanitizeStr(stringB)
// }