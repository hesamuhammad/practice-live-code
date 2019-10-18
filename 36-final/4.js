/**
 * =================
 * Steam Summer Sale
 * =================
 * 
 * [Description]
 * Steam sedang diskon besar-besaran untuk beberapa nama game besar, berikut datanya:
 * | No  | Title                            | Short Key | Price  | Genre                |
 * | --- | -------------------------------- | --------- | ------ | -------------------- |
 * | 1   | Grand Theft Auto V               | gta5      | 290000 | action               |
 * | 2   | Assassin's Creed Odyssey         | aco       | 500000 | rpg                  |
 * | 3   | Counter Strike: Global Offensive | csgo      | 120000 | first-person shooter |
 * | 4   | Playerunknown's Battlegrounds    | pubg      | 210000 | first-person shooter |
 * | 5   | Monster Hunter: World            | mhw       | 250000 | action               |
 * 
 * [Instruction]
 * 1. buat sebuah function yang menerima array of strings yang valuenya berupa short-key dari game yang dibeli
 * 2. function terssebut akan mereturn sebuah object yang berisikan data yang dikelompokkan berdasarkan genre-nya
 *    dan total harga yang harus dibayar user.
 * 
 * [Example]
 * @input = ['gta5']
 * @output
 *    {
 *      action: [{ title: 'Grand Theft Auto' }],
 *      subTotal: 290000
 *    }
 * 
 * [Rules]
 * 1. Hanya boleh menggunakan built-in function: .push
 * 2. Dilarang menggunakan regex dan built-in function lain.
 */


function steam(arr) {
  // your code here
}

console.log(steam([]))
// {
//   subTotal: 0
// }

console.log(steam(['gta5', 'aco']))
// {
//   action: [{ title: 'Grand Theft Auto' }],
//   rpg: [{title: 'Assassins Creed Odyssey'}],
//   subTotal: 750000
// }

console.log(steam(['aco', 'pubg', 'mhw']))
// {
//   rpg: [{ title: 'Assassins Creed Odyssey'}],
//   'first-person shooter': [{ title: 'Playerunknowns Battlegrounds'}],
//   action: [{ title: 'Monster Hunter: World'}],
//   subTotal: 960000
// }

console.log(steam(['gta5', 'aco', 'pubg', 'csgo', 'mhw']))
// {
//   action: [
//     {
//       title: 'Grand Theft Auto V'
//     }, {
//       title: 'Monster Hunter: World'
//     }
//   ],
//   rpg: [
//     {
//       title: 'Assassins Creed Odyssey'
//     }
//   ],
//   'first-person shooter': [
//     {
//       title: 'Playerunknowns Battlegrounds'
//     }, {
//       title: 'Counter Strike: Global Offensive'
//     }
//   ],
//   subTotal: 1370000
// }