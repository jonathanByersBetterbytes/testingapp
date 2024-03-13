/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    let result = 0
    if(stringA.length == stringB.length){
        for(let i=0;i<stringA.length;i++)
            if(stringA[i].toLowerCase() != stringB[i].toLowerCase())
                result++
    }else throw new Error('Strings do not have equal length')
    return result
} 


let result = hammingDistance('raceicar', 'racescar')
console.log(result)
document.querySelector('h2').innerText = result

module.exports = hammingDistance