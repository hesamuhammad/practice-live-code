/**

******************************
ODD PAIR FIRST LAST RECURSIVE
******************************

Diberikan sebuah function oddPairFirstLast yang memiliki satu parameter bertipe number.
Function ini akan mengembalikan hasil penjumlahan nilai pasangan yang ganjil dimana pasangan ganjil tersebut
adalah gabungan index 0 + index terakhir, index 1 + index terakhir - 1, dst.
JIKA angka tidak memiliki pasangan MAKA dipasangkan dengan angka 1

Contoh 1:
----------
input: 2345
output: 25
penjelasan:
  - index[0] + index[terakhir] => 25
  - index[1] + index[terakhir - 1] => 34

  karena pasangan yang ganjil hanya 25 maka 25 + 0 => function akan me-return 25

Contoh 2:
---------
input: 23351
output: 87
penjelasan:
  - index[0] + index[terakhir] => 21
  - index[1] + index[terakhir-1] => 35
  - karena index[2] merupakan index[terakhir-2] (tidak memiliki pasangan)
    maka angka ini akan dipasangkan dengan angka 1 => 31

  karena pasangan ganjil adalah 21, 35 dan 31 maka 21 + 35 + 31 => function akan me-return 87

Contoh 3:
----------
input: 2335
output: 58
penjelasan:
  - index[0] + index[terakhir] => 25
  - index[1] + index[terakhir-1] => 33

  karena pasangan ganjil adalah 25 dan 33 maka 25 + 33 => function akan me-return 58



RULES
=====
  - Wajib menggunakan metode rekursif
  - Dilarang menambahkan parameter baru
  - Dilarang membuat variable di luar function oddPairFirstLast
  - Dilarang mengubah tipe data parameter
  - Dilarang membuat function didalam function yang bertujuan untuk melakukan rekursif

**/

function oddPairFirstLast(num) {
    if (num.toString().length === 1) {
      let temp = Number(num + '1')
      if (temp % 2 === 1) {
        // this is odd
        return temp
      } else {
        // this is even
        return 0
      }
    }
  
    if (num.toString().length === 2) {
      if (num % 2 === 1) {
        // this is odd
        return num
      } else {
        // this is even
        return 0
      }
    } else {
      let temp = Number(num.toString()[0] + num.toString()[num.toString().length - 1])
      if (temp % 2 === 1) {
        // this is odd
        return temp + oddPairFirstLast(Number(num.toString().slice(1, num.toString().length - 1)))
      } else {
        // this is even
        return 0 + oddPairFirstLast(Number(num.toString().slice(1, num.toString().length - 1)))
      }
    }
  }
  
  console.log(oddPairFirstLast(2345))// 25
  console.log(oddPairFirstLast(2335)) // 58
  console.log(oddPairFirstLast(23351)) // 87
  console.log(oddPairFirstLast(42548)); //51
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // function oddPairFirstLast(num) {
  //   num = String(num);
  //   pasangan = [];
  //   for (let i = 0; i < num.length/2; i++) {
  //     if (i != num.length-1-i) {
  //       pasangan.push(num[i] + num[num.length-1-i]);
  //     }
  //     else {
  //       pasangan.push(num[i] + '1')
  //     }
  //   }
  //     var hasil = 0;
  //     for (let i = 0; i < pasangan.length; i++) {
  //       if (Number(pasangan[i]) % 2 != 0) {
  //         hasil += Number(pasangan[i])
  //       }
  //     }
  //   return hasil;
  // }
  