/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `viruses` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  viruses: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4 viruses detected

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  viruses: 'h|r' ==> berarti mencari h dan r

outuput: 3 viruses detected


RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX

 PSEUDOCODE :

 STORE "countVirus" with the value of 0

  FOR LOOP index 0 to length of str
    FOR LOOP index 0 to length of viruses
*/

function virusCheck (str, viruses) {
  if (!str.length || !viruses){
    return 'No virus detected'
  } else {
    var countVirus = 0;
    for (var i = 0; i < viruses.length; i++){
      for (var j = 0; j < str.length; j++){
        if (viruses[i].toLowerCase() == str[j].toLowerCase()){
          countVirus++
        }
      }
    }
    if (countVirus === 0){
      return 'No virus detected'
    } else {
      return countVirus
    }
  }
}


console.log(virusCheck('qlD4MZax0raQqew', 'x|0|q')); // 5 viruses detected
console.log(virusCheck('HH0NBP1zRa', 'h|r')); // 3 viruses detected
console.log(virusCheck('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6 viruses detected
console.log(virusCheck('mjBgPlzks', 'm')); // 1 virus detected
console.log(virusCheck('AIn4Ks05bBaa', 'x')); // No virus detected
console.log(virusCheck('RsMFjBUjvIaP')); // No virus detected
console.log(virusCheck('')); // No virus detected



// function virusCheck (str, viruses) {

//   if(!str.length || !viruses){
//     return "No virus detected";
//   } else {
//     // console.log(viruses.length)
//     var countVirus = 0;
//     for(var i = 0; i < viruses.length; i++){
//       // console.log(viruses[i])
//       for(var j = 0; j < str.length; j++){
//         // console.log(str[j])
//         if(viruses[i].toLowerCase() == str[j].toLowerCase()){
//           countVirus++
//         }
//       }
//     }
//     // console.log(countVirus)
//     if(countVirus === 0){
//       return "No virus detected";
//     } else {
//       return countVirus
//     }
//   }

// }