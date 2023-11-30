
// string
// removes all exlamation marks from it

function RemoveExlMark(str){
    return str.replaceAll('!','')
}

let testVar = 'hey!!!you!!'
console.log(RemoveExlMark(testVar));
document.querySelector('h2').innerText = RemoveExlMark(testVar);


// string of words
// length of shortest word

const shortestWord = function(strWrds){
    let arrWrds = strWrds.split(' ')
    let shortestWrd = ''
    for(let i = 0;i<arrWrds.length;i++){
        if(shortestWrd.length > arrWrds[i].length || shortestWrd == '') shortestWrd = arrWrds[i]
    }
    return shortestWrd.length
}
let testVar2 = 'hey fine llkjI will tell you'
console.log(shortestWord(testVar2));
document.querySelector('h2').innerText = shortestWord(testVar2);



