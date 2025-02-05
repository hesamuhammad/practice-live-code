/*
HACKTIV8 Final Live Coding Rocket
=======================
British National Crisis
=======================
Name : __________
Tiga narapidana kabur dari penjara London. Tiga narapidana ini memiliki nomor sel 1, 5, dan 9.
Tiga narapidana ini bergabung dan menyatukan kekuatan dan pikiran untuk mengacau di Inggris dengan melakukan pengeboman di tempat-tempat yang berbeda.
Setiap kali mereka mau melakukan pengeboman, mereka mengirimkan sebuah kode aneh ke Scotland Yard, markas kepolisian Inggris.
Seorang detektif pemula tengah mencoba menyelesaikan krisis tersebut.
Ternyata, kode tersebut merupakan sebuah pola. Kode tersebut merupakan angka 2,3,4,6,7, atau 8
 yang ditulis dengan kata dalam bahasa Inggris, dan diacak.
Seluruh karakter di kode tersebut apabila disusun dengan baik, akan menghasilkan beberapa kata berupa angka dalam bahasa Inggris.
District yang akan diserang selanjutnya adalah total dari angka yang ditemukan di kode tersebut!
Karena tiga narapidana ini benci dengan sel mereka,
 mereka tidak memasukkan angka 1, 5, dan 9.  Berikut ini adalah bahasa Inggris untuk angka yang digunakan:
  TWO -> 2
  THREE -> 3
  FOUR -> 4
  SIX -> 6
  SEVEN -> 7
  EIGHT -> 8
Contoh Kode 1:
WTWTHROETEO.
Apabila diacak mendapatkan kombinasi TWO TWO THREE => 2, 2, dan 3. 2 + 2 + 3 = 7, maka targetnya District 7!
Contoh Kode 2:
HSEVTEEING.
Apabila diacak mendapatkan kombinasi SEVEN EIGHT => 7 dan 8. 7 + 8 = 15, maka targetnya District 15!
Contoh Kode 3:
FNEXSIVUSEOR. Apabila diacak mendapatkan kombinasi FOUR SIX SEVEN => 4, 6, dan 7. 4 + 6 + 7 = 17, maka targetnya District 17!
Contoh Kode 4:
WTO. Apabila diacak mendapatkan kombinasi TWO => 2. Maka targetnya District 2!
HINT:
Urutan angka mana yang keluar lebih dulu tidak penting!
Yang penting adalah kita mendapatkan district berapa yang menjadi target!
*/

function nextTargetArea (code) {
    let str = []
    let num = []
    for (let i = 0; i < code.length; i++) {
      let s = 0
      for (let j = 0; j < str.length; j++) {
        if (code[i] === str[j]) {
          s++
        }
      }
      if (s === 0) {
        str.push(code[i])
      }
    }
    console.log(str)
    for (let i = 0; i < str.length; i++) {
      let s = 0
      for (let j = 0; j < code.length; j++) {
        if (str[i] === code[j]) {
          s++
        }
      }
      num.push(s)
    }
    console.log(num)
  
    // MENCOCOKAN KODE '------------------------------------------------------------------------>;
    let strCode = ['TWO', 'THREE', 'FOUR', 'SIX', 'SEVEN', 'EIGHT']
    let numCode = [2, 3, 4, 6, 7, 8]
    let count = 0
    for (let i = 0; i < strCode.length; i++) {
      let s = 0
      for (let j = 0; j < strCode[i].length; j++) {
        for (let k = 0; k < str.length; k++) {
          if (strCode[i][j] === str[k]) {
            s++
          }
        }
      }
      if (s === strCode[i].length) {
        let x = 0
        for (let a = 0; a < strCode[i].length; a++) {
          for (let b = 0; b < str.length; b++) {
            if (strCode[i][a] === str[b]) {
              if (num[b] > 0) {
                x++
              }
            }
          }
        }
        if (x === strCode[i].length) {
          for (let c = 0; c < strCode[i].length; c++) {
            for (let d = 0; d < str.length; d++) {
              if (strCode[i][c] === str[d]) {
                num[d]--
              }
            }
          }
          count += numCode[i]
          i--
        }
      }
    } // end of loop i
    return `District ${count} is the next target!`
  } // endof fucntion
  
  console.log(nextTargetArea('WTO')) // "District 2 is the next target!"
  console.log(nextTargetArea('WTWTHROETEO')) // "District 7 is the next target!"
  console.log(nextTargetArea('HSEVTEEING')) // "District 15 is the next target!"
  console.log(nextTargetArea('FNEXSIVUSEOR')) // "District 17 is the next target!"
  console.log(nextTargetArea('EFNEXRSIVHUSEORTE')) // "District 20 is the next target!"