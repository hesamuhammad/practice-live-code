// 1. Mengganti bilangan prima menjadi '$'

function angkaPrima(angka) {
    let result = true;
    if (angka < 2) {
        result = false
    }
    for (let i = 2; i < angka; i++) {
        if (angka % i === 0) {
            result = false
        }
    }
    return result
}

function gantiPrima(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            var cekPrima = angkaPrima(array[i][j])
            if (cekPrima === true) {
                array[i][j] = "$"
            }
        }
    }
    return array
}

var input = [
    [2, 3, 8, 9],
    [19, 27, 21, 90],
    [111, 78, 23],
    [21, 113]
]
console.log(gantiPrima(input))

// output:
// [
//     ['$', '$', 8, 9],
//     ['$', 27, 21, 90],
//     [111, 78, '$'],
//     [21, '$']
// ]