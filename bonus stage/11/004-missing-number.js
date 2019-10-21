/*
================
MISSING NUMBER
================

description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum ( arr ) {
  // Your code here
  var result = [];
  for (var i = 0; i < arr.length; i++){
    
  }
}


console.log(missingNum([[3,' ', 5], [1,' ', 7], [9,' ',' ']])) // [ 2, 4, 6, 8 ]
console.log(missingNum([[ 2,' '], [' ',5]])) // [ 3, 4 ]
console.log(missingNum([[11,' ', 13], [17,' ', 19], [' ',16,' ']])) // [ 12, 14, 15, 18 ]
console.log(missingNum([[3,' ', 5, 15], [1,' ', 7, 13], [9,' ',' ', 12], [' ', 16,' ',' ']])) // [ 2, 4, 6, 8 ]
console.log(missingNum([])) // []


// function sort(data) {
//   for (var i = 0; i < data.length; i++) {
//     for (var j = 0; j < data.length; j++) {
//       if (data[j] > data[j + 1]) {
//         var temp = data[j]
//         data[j] = data[j + 1]
//         data[j + 1] = temp
//       }
//     }
//   }
//   return data
// }

// function missingNum(arr) {
//   // Your code here
//   var checkNum = []
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       // console.log(arr[i][j])
//       if (arr[i][j] !== " ") {
//         checkNum.push(arr[i][j])
//       }
//     }
//   }
//   var sorting = sort(checkNum)
//   var start = checkNum[0]
//   var end = checkNum[checkNum.length - 1]
//   var result = []
//   for (let i = start; i <= end; i++) {
//     var flag = true
//     for (let j = 0; j <= sorting.length; j++) {
//       if (i === sorting[j]) {
//         flag = false
//       }
//     }
//     if (flag === true) {
//       result.push(i)
//     }
//   }
//   return result
// }