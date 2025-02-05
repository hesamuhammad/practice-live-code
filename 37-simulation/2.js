/**
 * ===============
 * Slice and dice!
 * ===============
 * 
 * Diberikan sebuah function bernama slice dimana function tersebut menerima tiga paramter.
 *  - Parameter pertama bernama `data` bertipe array
 *  - Parameter kedua bernama `index` bertipe array (optional)
 * 
 * `index` dapat berisi 0, 1, atau 2 angka:
 * 1. Jika index berisi 2 angka, maka index[0] merupakan titik mulai dan index[1] merupakan titik akhir
 *    Jadi array yang diambil adalah `dari mulai hingga sebelum selesai`
 * 2. Jika index berisi 1 angka, maka index[0] merupakan titik mulai
 *    Jadi array yang diambil adalah `dari mulai hingga akhir array`
 * 3. Jika index tidak berisi angka, maka array yang diambil adalah `dari awal hingga akhir array`
 * 
 * ASUMSI:
 * - jika value index[0] lebih besar dibandingkan jumlah data array,
 *   atau index[0] lebih besar dari index[1] maka function akan mengembalikan array kosong
 * 
 * CONTOH CASE BISA DILIHAT PADA DRIVER CODE
 * 
 * RULES:
 *  1. `DILARANG MENGGUNAKAN` built in function selain .push
 */

function slice(data, index) {
  // Write your code here
  var result = [];
  var start = index[0]
  var end = index[1]
  
  if (start === undefined && end === undefined){
    result = data;
  } else if (start > data.length){
    result = [];
  } else if (end){
    for (var i = start; i < end; i++){
      result.push(data[i]);
    }
  } else {
    for (var i = start; i < data.length; i++){
      result.push(data[i]);
    }
  }
  return result
}

//DRIVER CODE

console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [2])); // [ 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [2, 4])); // [ 'camel', 'duck' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [1, 5])); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], [20])); //[]