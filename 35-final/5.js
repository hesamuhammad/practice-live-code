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
  { pengirim: <nama pengirim>, tagihan: <jumlah tagihan>, durasi: <jumlah durasi pengiriman> },
  { pengirim: <nama pengirim>, tagihan: <jumlah tagihan>, durasi: <jumlah durasi pengiriman> },
  ...
]
​
Data yang diharapkan merupakan perhitungan tagihan dan durasi pengiriman dengan ketentuan:
- perjalanan antar kota bernilai 9000/kota
    Ex. dari Depok ke Bandung = Depok >> Jakarta >> Bandung = 2 * 9000 = 18000
    Ex. dari Bali ke Bandung = Bali >> Surabaya >> Bandung = 2 * 9000 = 18000
- Pengiriman dalam kota bernilai 9000
- Untuk pengiriman dengan ekspedisi NJE diskon 10%
- Jika value kota asal atau tujuan tidak ada di dalam daftar kota yang sudah disediakan, maka tagihan 0 dan durasi 0.
- Pengiriman tiap kota berdurasi 1 hari. 
    Ex. dari Depok ke Bandung = Depok >> Jakarta >> Bandung = 2 hari

*/


function ongkosKirim(pengirim) {
  //your code here
  var transit = ['Depok','Jakarta','Bandung','Surabaya','Bali']
  var perTransit = 9000;

  var output = []
  for(var i = 0 ; i < pengirim.length; i++){
    var dapat = {}
    var nama = ''
    var transiter = 0
    var harga = 0
    var durasi = 0
    for(var j = 0 ; j< transit.length; j++){
      nama = pengirim[i].nama
      var asal1 = 0
      var asal2 = 0
      if (pengirim[i].asal == transit[j]) {
        asal1 += j 
      } else if (pengirim[i].tujuan == transit[j]) {
        asal2 += j
      }
      
      if (asal1 > asal2) {
        transiter = asal1 - asal2
        transiter = transiter -1
      } else if (asal1 < asal2){
        transiter = asal2 - asal1
      }
    }
    if (transiter > 1) {
      transiter = transiter -1
    }

    if (transiter == 0) {
      transiter = 1
    }

    if (pengirim[i].ekspedisi == 'NJE') {
      harga = ((transiter * perTransit)*90/100)
    } else {
      harga = ((transiter * perTransit))
    }

    if (transit.indexOf(pengirim[i].asal) == -1) {
      harga = 0
      transiter = 0
    }

      dapat['nama'] = nama
      dapat['tagihan'] = harga
      dapat['durasi'] = transiter
  
      output.push(dapat)
  }
    
  return output
}

var case1 = [
  { nama: 'Jasper', asal: 'Depok', tujuan: 'Jakarta', ekspedisi: 'NJE' },
  { nama: 'Kevin', asal: 'Jakarta', tujuan: 'Surabaya', ekspedisi: 'Si Lambat' },
  { nama: 'Barry', asal: 'Bali', tujuan: 'Bandung', ekspedisi: 'NJE' }
];

console.log(ongkosKirim(case1))
/*
[
  { pengirim: 'Jasper', tagihan: 8100, durasi: 1 },
  { pengirim: 'Kevin', tagihan: 18000, durasi: 2 },
  { pengirim: 'Barry', tagihan: 16200, durasi: 2 }
]
*/

var case2 = [
  { nama: 'Patricia', asal: 'Jakarta', tujuan: 'Jakarta', ekspedisi: 'TnJ' },
  { nama: 'Anne', asal: 'Medan', tujuan: 'Depok', ekspedisi: 'NJE' }
];

console.log(ongkosKirim(case2))
/*
[ 
  { pengirim: 'Patricia', tagihan: 9000, durasi: 1 },
  { pengirim: 'Anne', tagihan: 0, durasi: 0 }
]
*/