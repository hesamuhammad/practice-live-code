/*

Diberikan sebuah function angka terbesar yang menerima satu parameter berupa array.
fungsi ini akan mengembalikan atau me return nilai berupa angka terbesar dari array.
Jika array kosong maka akan mengembalikan nilai -1

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/
function angkaTerbesar(array) {
    // you can only write your code here!
    if (array.length === 0) {
      return -1
    }
  
    if (array.length === 1) {
      return array[0]
    }
  
    // return array[0] > angkaTerbesar(array.slice(1))
    //   ? array[0]
    //   : angkaTerbesar(array.slice(1))
    if (array[0] > angkaTerbesar(array.slice(1))) {
      return array[0]
    } else {
      return angkaTerbesar(array.slice(1))
    }
  }
  
  // TEST CASES
  console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
  console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
  console.log(angkaTerbesar([7, 7, 7, 7, 7])) // 7
  console.log(angkaTerbesar([])) // -1
  