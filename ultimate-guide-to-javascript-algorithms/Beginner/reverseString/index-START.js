/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


 
function reverseString(text) {
    // Code goes here
    text = text.split('') 
    text = text.reverse()
    text = text.join('') 
    return text
} 


module.exports = reverseString