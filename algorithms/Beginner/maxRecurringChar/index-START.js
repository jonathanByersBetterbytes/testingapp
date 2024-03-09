/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/


// return most character found with For...in Iteration
function maxRecurringChar(text) {
    let charMap= {}
    let maxChar = ''
    let maxNum = 0
    //loop through string
    for(let char of text){
        if(charMap.hasOwnProperty(char)) charMap[char]++
        else charMap[char] = 1
    }
    console.log(charMap)
    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char]
            maxChar = char
        } 
        
    }
    return maxChar

    // return most character found
}

//console.log(maxRecurringChar('aabacada'))

module.exports = maxRecurringChar;


// // return most character found with For...in Iteration
// function maxRecurringChar(text) {
//     let charMap= {}
//     let maxChar = ''
//     let maxNum = 0
//     //loop through string
//     for(let char of text){
//         if(charMap.hasOwnProperty(char)) charMap[char]++
//         else charMap[char] = 1
//     }
//     console.log(charMap)
//     for(let char in charMap){
//         if(charMap[char] > maxNum){
//             maxNum = charMap[char]
//             maxChar = char
//         } 
        
//     }
//     return maxChar

//     // return most character found
// }

// return most character found with forming Arrays from a character map
// function maxRecurringChar(text) {
//     // set up a charMap and a maxNum and maxChar vars
//     let charMap = {}
//     let keysArray = [], valuesArray = []
//     let maxNum = 0, maxChar = ''
//     // loop through to create map incrementing or initializing as you go
//     for(let char of text){
//         if(charMap.hasOwnProperty(char)) charMap[char]++
//         else charMap[char] = 1
//     }
//     // get the charMap's keys and value into arrays
//     keysArray = Object.keys(charMap)
//     valuesArray = Object.values(charMap)
//     maxNum = Math.max(...valuesArray)
//     return keysArray[valuesArray.indexOf(maxNum)]
// }
