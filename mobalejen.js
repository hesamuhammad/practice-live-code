/*
  ======================
  MOBA LEGEND BEST POWER
  ======================
  mobaLegendBestPower adalah sebuah function dimana menerima 1 parameter heroes
    - heroes adalah sebuah array of object yang berisi nama-nama hero mobile legend
    - terdapat bonus combination yang merupakan bonus power untuk kombinasi hero
  output dari function ini adalah sebuah number total power terbesar
  [NOTES]
  - intinya menjumlahkan semua power ditambah juga dengan bonus bila ada yang sesuai
  - dilarang menggunakan built in function selain .push(), .unshift(), .pop(), .shift()
*/

function mobaLegendBestPower (heroes) {
    let bonus = {
      'Zi Long+Layla': 300,
      'Layla+Kagura': 400
    }
    
    let totalPower = 0
    for (let i = 0; i < heroes.length; i++) {
      totalPower += heroes[i].power
    }
    
    //combination
    for (let i = 0; i < heroes.length; i++) {
      for (let j = 0; j < heroes.length; j++) {
        let tmp = ''
        if (i !== j) {
          tmp = heroes[i].name + '+' + heroes[j].name
        }
        if (bonus[tmp]) {
          totalPower += bonus[tmp]
        }
      }
    }
    return totalPower
  }
  
  console.log(mobaLegendBestPower([
    {
      name: 'Zi Long',
      power: 2000
    },
    {
      name: 'Layla',
      power: 1800
    },
    {
      name: 'Kagura',
      power: 2500
    }
  ])) // 7000
  
  console.log(mobaLegendBestPower([
    {
      name: 'Zi Long',
      power: 2000
    },
    {
      name: 'Layla',
      power: 1800
    }
  ])) // 4100