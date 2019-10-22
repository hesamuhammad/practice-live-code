// 3. buat function rekursif untuk mengecek sebuah kata apakah palindrome atau bukan.outuput nya true atau false

function palindromekata(str) {
    if (str.length === 0) {
        return true;
    } else {
        var depan = str[0];
        var belakang = str[str.length - 1];
        if (depan !== belakang) {
            return false;
        } else {
            var sisaKata = str.slice(1, str.length - 1);
            return palindromekata(sisaKata);
        }
    }
}

console.log(palindromekata("daniel"))
console.log(palindromekata("putra"))
console.log(palindromekata("kasurrusak"))
console.log(palindromekata("katak"))