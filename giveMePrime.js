function myPrime(num) {
    var flag = true
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            flag = false
        }
    }
    return flag
}

function giveMePrime(level) {
    //your code here
    var kumpulanPrima = [];
    var counter = 2;
    while (kumpulanPrima.length < level * level) {
        if (myPrime(counter) === true) {
            kumpulanPrima.push(counter)
        }
        counter++
    }
    var result = []
    var index = 0
    for (let i = 0; i < level; i++) {
        var newArr = []
        for (let j = 0; j < level; j++) {
            newArr.push(kumpulanPrima[index++])
        }
        result.push(newArr)
    }
    return result
}

console.log(giveMePrime(3));
// [
//   [2, 3, 5],
//   [7, 11, 13],
//   [17, 19, 23]
// ]


console.log(giveMePrime(4));
// [
//   [2, 3, 5, 7],
//   [11, 13, 17, 19],
//   [23, 29, 31, 37,
//   [41, 43, 47, 53]
// ]