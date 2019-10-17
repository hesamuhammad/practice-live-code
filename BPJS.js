/*
    =======================
    Salary Range Calculator
    =======================

    Buatlah sebuah program sederhana yang menghitung
    `salaryNett` dan `totalBPJS` yang didapatkan setiap karyawan sesuai dengan
    Golongan `brutoSalary` nya masing - masing.
    pengertian :
    - `brutoSalary` adalah gaji kotor
    - `salaryNett` adalah gaji bersih yang didapat karyawan dengan rumus
    salaryNett` = `brutoSalary` - (`brutoSalary` * `tax`) - ( (`brutoSalary` - (`brutoSalary` * `tax`)) * `BPJS` )
    - `totalBPJS` adalah total BPJS yang telah dibayarkan oleh karyawan
    pada bulan ke (`months`) tertentu. rumusnya :
    `totalBPJS` = ( (`brutoSalary` - (`brutoSalary` * `tax`)) * `BPJS` ) * `months`


    [INSTRUCTION]
    Diketahui jika :
    `brutoSalary` => 9000000 keatas , maka : golongan I
    `brutoSalary` => 6000000 - 8999999,  maka : golongan II
    `brutoSalary` => 3000000 - 5999999, maka : golongan III
    `brutoSalary` => 1000000 - 2999999,  maka : golongan IV

    Golongan I
    diwajibkan membayar :
    - `tax` 4% dari `brutoSalary`
    - `BPJS` 5% dari `brutoSalary` setelah dikurangi `brutoSalary` * `tax`

    Golongan II
    diwajibkan membayar :
    - `tax` 3% dari `brutoSalary`
    - `BPJS` 4% dari `brutoSalary` setelah dikurangi `brutoSalary` * `tax`

    Golongan III
    diwajibkan membayar :
    - `tax` 2% dari `brutoSalary`
    - BPJS 3% dari `brutoSalary` setelah dikurangi `brutoSalary` * `tax`

    Golongan IV
    diwajibkan membayar :
    - tidak dikenakan `tax`
    - BPJS 2% dari `brutoSalary`

    Jika `brutoSalary` dibawah 1000000 maka outputnya
    "Gaji anda dibawah standard perusahaan"

    [EXAMPLE]
    diberikan input :
    brutoSalary = 5000000
    months = 3

    maka outputnya adalah :
    "netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000"


    **WAJIB MENGGUNAKAN PSEUDOCODE**

    [YOUR PSEUDOCODE HERE]
*/

function salaryRangeCalculator(brutoSalary,months) {
    var jenisGolongan = '';
    var tax = brutoSalary;
    var BPJS = 0;
    var minimumGaji = 0
    var result = '';
    if (brutoSalary >= 9000000){
        jenisGolongan = 'Golongan I'
        tax *= 0.04;
        minimumGaji = brutoSalary - tax;
        BPJS = 0.05 * minimumGaji;
    } else if (brutoSalary >= 6000000 && brutoSalary <= 8999999){
        jenisGolongan = 'Golongan II'
        tax *= 0.03;
        minimumGaji = brutoSalary - tax;
        BPJS = 0.04 * minimumGaji;
    } else if (brutoSalary >= 3000000 && brutoSalary <= 5999999){
        jenisGolongan = 'Golongan III'
        tax *= 0.02;
        minimumGaji = brutoSalary - tax;
        BPJS = 0.03 * minimumGaji;
    } else if (brutoSalary >= 1000000 && brutoSalary <= 2999999){
        jenisGolongan = 'Golongan IV'
        tax *= 0;
        minimumGaji = brutoSalary - tax;
        BPJS = 0.02 * brutoSalary;
    } else {
        jenisGolongan = 'Bukan Golongan KAMI !!!'
    }

    // RESULT
    var salaryNett = brutoSalary - tax - BPJS;
    var totalBPJS = BPJS * months;
    if (jenisGolongan === 'Golongan I' || jenisGolongan === 'Golongan II' || jenisGolongan === 'Golongan III' || jenisGolongan === 'Golongan IV'){
        console.log('netSalary = '+ salaryNett + ', totalBPJS yang telah dibayarkan = ' + totalBPJS)
    } else {
        console.log('Gaji anda dibawah standard perusahaan')
    }

    return result;
}


// - `salaryNett` adalah gaji bersih yang didapat karyawan dengan rumus
// salaryNett` = `brutoSalary` - (`brutoSalary` * `tax`) - ( (`brutoSalary` - (`brutoSalary` * `tax`)) * `BPJS` )
salaryRangeCalculator(5000000,3)
// netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000
