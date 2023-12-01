
//  num 0-100
// average score by letter "A-F"
// 91 => A
// take a num 0-100 and asign a letter grade

function grade(s1, s2, s3){
    let num = (s1+s2+s3)/3
    if(num < 60) return 'F'
    else if(num < 70) return 'D'
    else if(num < 80) return 'C'
    else if(num < 90) return 'B'
    else return 'A'
    return 'Not a valid grade'
}



let testVar1 = 12 // 
let testVar2 = 82 // 
let testVar3 = 92 // 
console.log(grade(testVar1,testVar2,testVar3));
document.querySelector('h2').innerText = grade(testVar1,testVar2,testVar3);








