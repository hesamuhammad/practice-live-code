// 2.

// * | No| Title                            | Short Key | Price  | Genre                |
// * |---| -------------------------------- | --------- | ------ | -------------------- |
// * | 1 | Grand Theft Auto V               | gta5      | 290000 | action               |
// * | 2 | Assassin's Creed Odyssey         | aco       | 500000 | rpg                  |
// * | 3 | Counter Strike: Global Offensive | csgo      | 120000 | first - person shooter|
// * | 4 | Playerunknown's Battlegrounds    | pubg      | 210000 | first-person shooter |
// * | 5 | Monster Hunter: World            | mhw       | 250000 | action               |


function game(array) {
    // your code here
    var objGame = {
        codeGame: ['gta5', 'aco', 'csgo', 'pubg', 'mhw'],
        title: ['Grand Theft Auto V ', `Assassin's Creed Odyssey`, 'Counter Strike: Global Offensive', `Playerunknown's Battlegrounds`, 'Monster Hunter: World '],
        price: [290000, 500000, 120000, 210000, 250000],
        genre: ['action', 'rpg', 'first-person shooter', 'first-person shooter', 'action']
    }

    var output = {}
    // for (var key in objGame) {
    for (var k = 0; k < array.length; k++) {
        for (var j = 0; j < objGame['codeGame'].length; j++) {
            if (output[objGame.genre[j]] === undefined) {
                output[objGame['genre'][j]] = {
                    title: [],
                    total: 0
                }
                if (array[k] === objGame['codeGame'][j]) {
                    output[objGame['genre'][j]]['title'].push(objGame['title'][j])
                    output[objGame['genre'][j]]['total'] += objGame['price'][j]
                }
            } else {
                if (array[k] === objGame['codeGame'][j]) {
                    output[objGame['genre'][j]]['title'].push(objGame['title'][j])
                    output[objGame['genre'][j]]['total'] += objGame['price'][j]
                }
            }
        }
    }
    return output
}
var input = ['gta5', 'aco', 'pubg', 'csgo', 'mhw']
console.log(game(input))
// output:
// {
//     action: {
//         title: ['Grand Theft Auto V', 'Monster Hunter: World'],
//             total: 540000
//     },
//     rpg: {
//         title: ['Assassin's Creed Odyssey' ],
//     total: 500000
//   },
//     'first-person shooter': {
//         title: ['Playerunknown's Battlegrounds', 'Counter Strike: Global Offensive' ],
//     total: 330000
//   }
// }