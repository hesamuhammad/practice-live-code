/* 
==================
Rating Ojek Online
==================

Setiap kali naik ojek online setelah sampai di tujuan, pada aplikasi kamu akan diminta untuk memberikan feedback.
Salah satu feedback yang diberi adalah dalam bentuk memberikan bintang.

Tugas kamu adalah membuat function countStar yang akan menghitung jumlah rata-rata dari semua bintang yang diterima oleh si abang ojol.
  
[INPUT]
[
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' '],
]


[PROCESS]
bintang yang diterima = [ 3, 4, 3, 5, 2, 3, 4, 2, 3, 2, 5, 4 ]

[OUTPUT]
3.333333333 => 3.33

[NOTE]
jika bentuk angka desimal maka hanya mereturn nilai sampai 2 angka di belakang koma

*/


function countStar(stars) {
  //your code here
  var count = 0;
  var length = stars.length;
  for (let i = 0; i < stars.length; i++) {
    for (let j = 0; j < stars.length; j++) {
      if (stars[i][j] === "*") {
        count++
      }
    }
  }
  var mean = count / length
  if (mean % 1 == 0) {
    return mean;
  } else {
    return mean.toFixed(2);
  }
}

console.log(countStar([
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' '],
]));
// 3.33

console.log(countStar([
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', '*', '*'],
]));
// 4.22