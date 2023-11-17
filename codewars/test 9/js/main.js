

// 0-9
// String representation
// 1 = 'One'
function numDigitToString(num){
    switch(num){
        case 0:
            return 'Zero'
        case 1:
            return 'One'
        case 2:
            return 'Two'
        case 3:
            return 'Three'
        case 4:
            return 'Four'
        case 5:
            return 'Five'
        case 6:
            return 'Six'
        case 7:
            return 'Seven'
        case 8:
            return 'Eight'
        case 9:
            return 'Nine'
        default:
            return 'Enter between 0 and 9'
    }
}

let testVar1 = 7  // "Seven"
let testVar2 = "aaaxbbbbyyhwawiwjjjwwm" // 
console.log(numDigitToString(testVar1));
document.querySelector('h2').innerText = numDigitToString(testVar1);









