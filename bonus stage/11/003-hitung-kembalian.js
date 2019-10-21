/**
================
Hitung Kembalian
================

buatlah function yang akan menghitung nominal dan rekJumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 

Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
 
*/


function hitungKembalian(bayar, harga){
  var sisa = bayar - harga;
  var rekUang = []
  var rekJumlah = []
  var uang = [100000, 50000, 20000, 10000, 5000, 2000, 1000]


  if (sisa < 0) return 'Uang tidak cukup';

  for (var i = 0; i < uang.length; i++){
   if (sisa >= uang[i]){
     rekUang.push(uang[i])
     var num = Math.floor(sisa / uang[i])
     if (num > 5){
       rekJumlah.push(5)
       sisa = sisa - (5 * uang[i])
     }
     else {
      rekJumlah.push(num)
      sisa = sisa - (num * uang[i])
     }
    }
  }

  var hasil = {};
  for (var i = rekUang.length - 1; i >= 0; i--){
    hasil[rekUang[i]] = rekJumlah[i];
  }
  return hasil
}
// console.log(rekUang)


// Test Case
console.log(hitungKembalian(1000000, 755000));
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Test Case
console.log(hitungKembalian(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Test Case 3
console.log(hitungKembalian(920000, 80000));
/*
output
  { 
    '10000': 1, 
    '20000': 4, 
    '50000': 5, 
    '100000': 5 
  }
*/

// TEST CASE 4
console.log(hitungKembalian(50000,50000)); // {}

// TEST CASE 5
console.log(hitungKembalian(50000,500000)); // Uang tidak cukup












