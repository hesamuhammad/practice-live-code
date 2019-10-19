/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'
                    
*/
function mySplit(kalimat) {
  // you can only write your code here!
  if (kalimat.length === 0) {
    return ''
  }
  var arr = [];
  var str = "";
  for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] !== " ") {
      str += kalimat[i];
    }
    if (kalimat[i] === " ") {
      arr.push(str);
      str = "";
    }
  }
  arr.push(str);
  return arr
}

function sensorSentence(sentence, words) {
  //split menjadi array
  if (sentence === "") {
    return ""
  }
  var diSplit = mySplit(sentence)
  // console.log(diSplit)
  for (let i = 0; i < diSplit.length; i++) {
    if (diSplit[i] === words) {
      diSplit[i] = ""
      for (let j = 0; j < words.length; j++) {
        diSplit[i] += "*"
      }
    }
  }
  var temp = ''
  var parameter = ' '
  for (var i = 0; i < diSplit.length; i++) {
    if (i == diSplit.length - 1) {
      temp += diSplit[i]
    } else {
      temp += diSplit[i]
      temp += parameter
    }
  }
  return temp
}


console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********

console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

console.log(sensorSentence('', '')) // ''
