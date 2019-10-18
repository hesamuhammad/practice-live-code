/*
  =====
  Top 3
  =====
  Seorang user spotify ingin mengetahui lagu apa saja yang dia putar
  selama seminggu terakhir diurutkan dari paling jarang diputar

  Tugas kamu adalah membuat function sortPlaylist yang menerima inputan
  sebuah array satu dimensi berisi data lagu.

  Output dari function tersebut adalah array 2 dimensi yang menampilkan
  judul lagu terurut dari jumlah pemutaran yang paling sedikit.

  INPUT:
    ['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']

  OUTPUT:
    [ 'A Whole New World', 'I Love You 3000', 'Senorita' ]

  RULES:
   - DILARANG MENGGUNAKAN BUILT IN FUNCTION APAPUN KECUALI .push()
*/

// function grouping(arrLagu) {
//   var result = [];
//   for (let i = 0; i < arrLagu.length; i++) {
//     if (result.length === 0) {
//       result.push([arrLagu[i]])
//     } else {
//       var check = false
//       for (let j = 0; j < result.length; j++) {
//         if (arrLagu[i] === result[j][0]) {
//           check = true
//           result[j].push(arrLagu[i])
//         }
//       }
//       if (check === false) {
//         result.push([arrLagu[i]])
//       }
//     }
//   }
//   return result
// }

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

// function sortPlaylist(playlist) {
//   // your code here
//   var group = grouping(playlist)
//   var result = []
//   var arrNum = []
//   for (let i = 0; i < group.length; i++) {
//     arrNum.push(group[i].length)
//   }
//   var sortNum = sort(arrNum)
//   for (let j = 0; j < sortNum.length; j++) {
//     for (let k = 0; k < group.length; k++) {
//       if (sortNum[j] === group[k].length) {
//         result.push(group[k][0])
//       }
//     }
//   }
//   return result
// }


// console.log(sortPlaylist(['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']));
// // // [ 'A Whole New World', 'I Love You 3000', 'Senorita' ]

// console.log(sortPlaylist(['Donna Donna', 'Top of The World', 'Donna Donna', 'Top of The World', 'Top of The World', 'Location Unknown']));
// // // [ 'Location Unknown', 'Donna Donna', 'Top of The World' ]

// console.log(sortPlaylist([])); // []

function sortPlaylist(playlist) {
  // your code here
  var obj = {}
  for (var i = 0; i < playlist.length; i++) {
    if (!obj[playlist[i]]) {
      obj[playlist[i]] = ''
      // your code here
      var obj = {}
      for (var i = 0; i < playlist.length; i++) {
        if (!obj[playlist[i]]) {
          obj[playlist[i]] = ''
        }
      }
      for (var j in obj) {
        var count = 0
        for (var i = 0; i < playlist.length; i++) {
          if (playlist[i] == j) {
            count++
          }
        }
        obj[j] = count
      }

      var output = []
      var masuk = []
      for (var i in obj) {
        masuk.push(i)
        masuk.push(obj[i])
        output.push(masuk)
        masuk = []
      }
      for (var i = 0; i < output.length; i++) {
        for (var j = 0; j < output.length - 1; j++) {
          if (output[j][1] > output[j + 1][1]) {
            var test = output[j]
            output[j] = output[j + 1]
            output[j + 1] = test
          }
        }
      }
      return output
    }
  }
}

console.log(sortPlaylist(['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']));
