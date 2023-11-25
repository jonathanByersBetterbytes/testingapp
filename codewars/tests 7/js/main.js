


// exactly 4 or 6 digit pin
// true if valid

function checkPin(pin){
    let strPin = pin.toString()
    if(strPin.length !== 4 && strPin.length !== 6) return false
    if(isNaN(strPin)) return false    
    if(strPin.indexOf('-') == -1 && strPin.indexOf('.') == -1 && strPin.indexOf('+') == -1){
        return strPin.length === 4 || strPin.length === 6
    }
    return false
}

let testVar1 = "123"
let testVar2 = "+226"
console.log(checkPin(testVar1));
document.querySelector('h2').innerText = checkPin(testVar2);

