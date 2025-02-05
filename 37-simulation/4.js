/**
 * =======================
 * Kumpulan Nama Negara
 * =======================
 * 
 * [Instruction]
 * Buatlah sebuah fungsi yang akan mengembalikan kumpulan-kumpulan nama negara.
 * Yang dikelompokkan sesuai dengan benua negara-negara tersebut berada.
 * 
 * [Descrition]
 * 1. Function menerima parameter berupa array multidimensional yang masing-masing
 *    elemennya berisi array dari nama negara dan benuanya.
 * 2. Function akan mengembalikan multidimensional Array yang dikelompokkan sesuai
 *    dengan benua dari masing-masing negara.
 * Contoh:
 * @result = [
 *    ['Amerika', 'Kanada', 'Mexico', ...],
 *    ['Asia', ...],
 *    ['Afrika', ...],
 *    ['Eropa', ...],
 * ]
 * Dimana ... merupakan nama-nama negara.
 * 
 * [Rules]
 * 1. tidak boleh menggunakan built in function kecuali .push() dan .unshift()
*/

function countryCollection(countries) {
  // you can only write your code here!
  let result = [];
  let tmp = {};
  for (var i = 0; i < countries.length; i++){
    if (tmp [countries[i][1]] === undefined){
      tmp[countries[i][1]] = [countries[i][0]];
    } else {
      tmp[countries[i][1]].push(countries[i][0])
    }
  }
  
  for (keys in tmp){
    tmp[keys].unshift(keys);
    result.push(tmp[keys]);
  }
  return result;
}

console.log(countryCollection([["Barbados", 'Amerika'], ["Oman", 'Asia'], ["Gibraltar", "Eropa"], ["Malaysia", "Asia"], ["Suriname", "Amerika"], ["Mayotte", "Afrika"], ["Turkmenistan", "Asia"], ["Austria", "Eropa"], ["Somalia", "Afrika"]]))
// [ 
//   [ 'Amerika', 'Barbados', 'Suriname' ],
//   [ 'Asia', 'Oman', 'Malaysia', 'Turkmenistan' ],
//   [ 'Eropa', 'Gibraltar', 'Austria' ],
//   [ 'Afrika', 'Mayotte', 'Somalia' ]
// ]

console.log(countryCollection([
  ["Bhutan", "Asia"],
  ["Comoros", "Afrika"],
  ["Botswana", "Afrika"],
  ["Iceland", "Eropa"],
  ["Lesotho", "Afrika"],
  ["Liechtenstein", "Eropa"],
  ["Malawi", "Afrika"],
  ["Algeria", "Afrika"],
  ["Azerbaijan", "Asia"],
  ["Indonesia", "Asia"],
  ["Andorra", "Asia"],
  ["Armenia", "Asia"]
]))
// [
//   ['Asia', 'Bhutan', 'Azerbaijan', 'Indonesia', 'Andorra', 'Armenia'],
//   ['Afrika', 'Comoros', 'Botswana', 'Lesotho', 'Malawi', 'Algeria'],
//   ['Eropa', 'Iceland', 'Liechtenstein']
// ]