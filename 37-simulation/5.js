 /**
 * =========================
 * Mengumpulkan poin belanja
 * =========================
 * 
 * [Description]
 * Ibu sedang mengumpulan poin belanja dan kita diminta membantunya.
 * Dari list barang yang ingin ibu beli, yang sudah ibu urutkan dari
 * pentingnya barang itu, kumpulkanlah sebanyak mungkin poin belanja
 * dengan modal yang diberikan.
 *
 * Ketentuan:
 * 1. Ketika membeli sebuah barang, selagi masih ada uang untuk membeli
 *    barang tersebut, baka beli sampai uang tidak dapat membeli barang itu lagi.
 * 
 * Daftar Harga Barang:
 * | Nama        | Harga        | Poin  |
 * | ----------- | ------------ | ----- |
 * | Kompor      | Rp 1.000.000 |  100  |
 * | Daging Sapi | Rp   300.000 |   95  |
 * | Bantal      | Rp    25.000 |   50  |
 * | Shampoo     | Rp    20.000 |   40  |
 * | Sabun       | Rp    10.000 |   20  |
 *
 * [Rules]
 * 1. Tidak boleh menggunakan built-in function kecuali push dan unshift
 */

function belanja(modal) {
  // Write your code here
  var obj = {
  }
  var belanja = {}
  var point = 0
  var totalBelanjaan = 0
  var shopList = [
    ['Kompor', 1000000, 100],
    ['Daging Sapi', 300000, 95],
    ['Bantal', 25000, 50],
    ['Shampoo', 20000, 40],
    ['Sabun', 10000, 20]
  ]

  for (var i = 0; i < shopList.length; i++){
    for (var j = 0; j < shopList[i].length; j++){
      if (modal >= shopList[i][1]){
        modal -= shopList[i][1];
        totalBelanjaan += shopList[i][1]
        belanja += shopList[i][0];
        point += shopList[i][2];
        
        
      }
    }
    obj['belanja'] = belanja;
    obj['poin'] = point;
    obj['kembalian'] = modal - totalBelanjaan;
  }
  return obj;
}

console.log(belanja(100000))
// { belanja: { Bantal: 4 }, poin: 200, kembalian: 0 }

console.log(belanja(1000000))
// { belanja: { Kompor: 1 }, poin: 100, kembalian: 0 }

console.log(belanja(1150500))
// { belanja: { Kompor: 1, Bantal: 6 }, poin: 400, kembalian: 500 }

console.log(belanja(0))
// { belanja: {}, poin: 0, kembalian: 0 }