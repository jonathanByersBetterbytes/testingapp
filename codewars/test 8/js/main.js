
// str DNA
// str RNA
// 'GCAT' => 'GCAU'
// taken in the str, replace all 'T's with 'U's, return new rna str

function dnaToRna(dnaStr){
    return dnaStr.replaceAll('T', 'U')
}

let testVar1 = "TGCA"
let testVar2 = "aaaxbbbbyyhwawiwjjjwwm" // 
console.log(dnaToRna(testVar1));
document.querySelector('h2').innerText = dnaToRna(testVar1);









