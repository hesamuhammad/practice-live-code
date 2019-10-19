/*
================
Format Uang (KBBI)
================

[INSTRUCTIONS]

formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00

[RULE]
- Wajib menggunakan Pseudocode/Algoritma
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
formatUang(2000)

output: Rp2.000,00
*/

/*



*/


function formatUang(number) {
  //code here
  var result = "Rp"
  var numStr = number.toString()
  if (numStr.length < 4) {
    return result += numStr += ",00"
  }
  for (let i = 0; i < numStr.length; i++) {
    result += numStr[i]
    if (numStr.length % 3 === 0) {
      if ((i + 1) % 3 === 0) {
        result += "."
      }
    } else if (i % 3 === 0) {
      result += "."
    }
  }
  if (result[result.length - 1] === ".") {
    var hapusBelakang = result.substring(0, result.length - 1)
    hapusBelakang += ",00"
    return hapusBelakang
  } else {
    result += ",00"
    return result
  }
}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00
