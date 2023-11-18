


// two numbers: miles away and gallons left
// true or false can they make it getting 25miles a gallon
function canMakeIt(miles, gallons){
    const milesToGallon = 25
    let dist = milesToGallon * gallons
    return dist >= miles
}

let testVar1 = 50  // 
let testVar2 = 2 // 
console.log(canMakeIt(testVar1, testVar2));
document.querySelector('h2').innerText = canMakeIt(testVar1, testVar2);









