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
    // write a funtion to create a charMap
    let createCharMap = str => {
        let charMap = {}
        for(let char of str){ 
            if(charMap.hasOwnProperty(char)) charMap[char]++
            else charMap[char] = 1
        }
        return charMap
    }
    if(stringA.length === stringB.length){
        let stringAMap = createCharMap(stringA)
        let stringbMap = createCharMap(stringB)
        for(let char in stringAMap)
            if(stringAMap[char] !== stringbMap[char]) // return are they the same?
                return false
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