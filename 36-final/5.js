/*
============
ONGKOS KIRIM
============
ongkosKirim adalah sebuah fungsi yang menerima parameter berupa array of object.
Function akan menerima sebuah parameter array of object dengan format:
​
[
  { nama: <nama pengirim>, asal: <asal pengirim>, tujuan: <tujuan pengiriman>, ekspedisi: <nama ekspedisi>},
  { nama: <nama pengirim>, asal: <asal pengirim>, tujuan: <tujuan pengiriman>, ekspedisi: <nama ekspedisi>},
  ...
]
​
Data di atas merupakan campuran seluruh data pengiriman dari berbagai ekspedisi.
​
Kota-kota yang dimiliki perusahaan adalah secara berurut adalah Depok, Jakarta, Bandung, Surabaya, Bali
​
Function akan memproses array of object tersebut untuk membuat sebuah laporan pengiriman dalam bentuk array of object dengan format:
​
[
  { pengirim: <nama pengirim>, tagihan: <jumlah tagihan> },
  { pengirim: <nama pengirim>, tagihan: <jumlah tagihan> },
  ...
]
​
Data yang diharapkan merupakan perhitungan tagihan pengiriman dengan ketentuan:
- perjalanan antar kota bernilai 9000/kota
    Ex. dari Depok ke Bandung = Depok >> Jakarta >> Bandung = 2 * 9000 = 18000
    Ex. dari Bali ke Bandung = Bali >> Surabaya >> Bandung = 2 * 9000 = 18000
- Pengiriman dalam kota bernilai 9000
- Untuk pengiriman dengan ekspedisi NJE diskon 10%
- Jika value kota asal atau tujuan tidak ada di dalam daftar kota yang sudah disediakan, maka tagihan 0.

*/


function ongkosKirim(pengirim) {
  //your code here
  

}

var case1 = [
  { nama: 'Jasper', asal: 'Depok', tujuan: 'Jakarta', ekspedisi: 'NJE' },
  { nama: 'Kevin', asal: 'Jakarta', tujuan: 'Surabaya', ekspedisi: 'Si Lambat' },
  { nama: 'Barry', asal: 'Bali', tujuan: 'Bandung', ekspedisi: 'NJE' }
];

console.log(ongkosKirim(case1))
/*
[
  { pengirim: 'Jasper', tagihan: 8100 },
  { pengirim: 'Kevin', tagihan: 18000 },
  { pengirim: 'Barry', tagihan: 16200 }
]
*/

var case2 = [
  { nama: 'Patricia', asal: 'Jakarta', tujuan: 'Jakarta', ekspedisi: 'TnJ' },
  { nama: 'Anne', asal: 'Medan', tujuan: 'Depok', ekspedisi: 'NJE' }
];

console.log(ongkosKirim(case2))
/*
[ 
  { pengirim: 'Patricia', tagihan: 9000 },
  { pengirim: 'Anne', tagihan: 0 }
]
*/