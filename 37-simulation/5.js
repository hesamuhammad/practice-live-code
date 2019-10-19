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
  var result = {
    belanja: {},
    poin: 0,
    kembalian: 0
  };
  
  var shopList = [
    { name: 'Kompor', price: 1000000, poin: 100},
    { name: 'Daging Sapi', price: 300000, poin: 95},
    { name: 'Bantal', price: 25000, poin: 50},
    { name: 'Shampoo', price: 20000, poin: 40},
    { name: 'Sabun', price: 10000, poin: 20}
  ]

  for (var i = 0; i < shopList.length; i++){
    while (modal >= shopList[i].price){
      if (modal >= shopList[i].price){
        modal -= shopList[i].price
        if (result.belanja[shopList[i].name] === undefined){
          result.belanja[shopList[i].name] = 1;
          result.kembalian = modal;
          result.poin += shopList[i].poin;
        } else {
          result.belanja[shopList[i].name] += 1;
          result.kembalian = modal;
          result.poin += shopList[i].poin;
        }
      }
    }
  }
  return result;
}

console.log(belanja(100000))
// { belanja: { Bantal: 4 }, poin: 200, kembalian: 0 }

console.log(belanja(1000000))
// { belanja: { Kompor: 1 }, poin: 100, kembalian: 0 }

console.log(belanja(1150500))
// { belanja: { Kompor: 1, Bantal: 6 }, poin: 400, kembalian: 500 }

console.log(belanja(0))
// { belanja: {}, poin: 0, kembalian: 0 }