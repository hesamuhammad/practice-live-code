function(prime(num)){
    for (var i = 2; i < angka; i++){
    if (angka % i === 0) {
        return false;
    }
}
return true;
}

function(giveMePrime(num)){
    arrPrime = [];
    for (var ; i < (num * num); i++){
        if (num % i !== 0){
            return arrPrime.push(i)
        }
    }
    
    var result = [];
    var index = 0;
    for (let = 0; i < nummm; i++){
        var newArr = [];
        for (let j = 0; j < nummm; j++) {
            newArr.push(arr[index++])
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