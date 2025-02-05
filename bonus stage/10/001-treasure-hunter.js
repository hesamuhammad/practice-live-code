/*
================
Treasure Hunter
================
[INSTRUCTIONS]
treasureHunt adalah sebuah function yang menerima satu parameter berupa string.
function akan mereturn berapa banyak jumlah harta karun (simbol) yang ada di dalam string tersebut.
harta karun atau simbol yang dicari adalah:
'!', '@', '#', '$', '%', '^', '&', '*', '(', ')'
Jika tidak ada simbol pada string tersebut, maka function akan mereturn 'harta karun tidak ditemukan'
[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string & array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
[EXAMPLE]
treasureHunt("alskdj*lakjsd761^%")
output: 3

1. WAJIB MENULISKAN PSEUDOCODE ATAU ALGORITHMA, JIKA PSEUDOCODE ATAU ALGORITHMA TIDAK MATCH MAKA ATAU TIDAK ADA
   MAKA PROGRAM DIANGGAP TIDAK JALAN

   PSEUDOCODE :

   STORE "countTreasure" with the value of zero
   STORE "treasure" with the value of Array ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

    FOR LOOP index 0 to length of str
      FOR LOOP index 0 to length of treasure
        IF str[i] EQUALS to treasure[j] THEN
          increment "countTreasure" by 1
        END IF
      EXIT LOOP
    EXIT LOOP

    DISPLAY "countTreasure"
*/

function treasureHunt(str) {
  var count = 0;
  var treasure = ['!', 
  '@', 
  '#', 
  '$', 
  '%', 
  '^', 
  '&', 
  '*', 
  '(', 
  ')']

  for (var i = 0; i < str.length; i++){
    for (var j = 0; j < treasure.length; j++){
      if (str[i] === treasure[j]){
        count++
      }
    }
  }
  return count
}


console.log(treasureHunt("alskdj*lakjsd761^%")); // 3
console.log(treasureHunt("4pa!n!")); // 2
console.log(treasureHunt("bin*ngbin*ang@!*&^")); // 7
console.log(treasureHunt("sandiKhusus")); // 0
console.log(treasureHunt("ki(*^hasd*&^%ja(*")); // 9

// 4 minutes 34 sec










// function treasureHunt(str) {

//   var countTreasure = 0;
//   var treasure = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

//   for(var i = 0; i < str.length; i++){
//     // console.log(str[i])
//     for(var j = 0; j < treasure.length; j++){
//       // console.log(treasure[j])
//       if(str[i] === treasure[j]){
//         countTreasure++
//       }
//     }
//   }
//   return countTreasure
// }