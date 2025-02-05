/**
  Vowels Counter Recursive

  Diberikan sebuah function consonantCounterRecursive(sentences) yang menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.

- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX

*/

function consonantCounterRecursive(sentences) {
    if (sentences.length === 1) {
      if (
        sentences.toLowerCase() === 'a' ||
        sentences.toLowerCase() === 'i' ||
        sentences.toLowerCase() === 'u' ||
        sentences.toLowerCase() === 'e' ||
        sentences.toLowerCase() === 'o' ||
        sentences >= '0' && sentences <= '9'
      ) {
        // this is vocals
        return 0
      } else {
        return 1
      }
    } else {
      if (
        sentences[0].toLowerCase() === 'a' ||
        sentences[0].toLowerCase() === 'i' ||
        sentences[0].toLowerCase() === 'u' ||
        sentences[0].toLowerCase() === 'e' ||
        sentences[0].toLowerCase() === 'o' ||
        sentences[0] >= '0' && sentences[0] <= '9'
      ) {
        return 0 + consonantCounterRecursive(sentences.slice(1))
      } else {
        return 1 + consonantCounterRecursive(sentences.slice(1))
      }
    }
  }
  
  
  console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //13
  console.log(consonantCounterRecursive('AziZy')) // 3
  console.log(consonantCounterRecursive('awt6an')) // 3
  
  //
  