
function lookYourEnemy(map) {
    //your code here
    var obj = {
        '2nd floor': 0,
        '1st floor': 0,
        'LG floor': 0
    };
    var count = 0;
    for (let i = 0; i < map.length; i++) {
        if (map[0][i] === 'x') {
            obj['2nd floor'] += 1
        }
        if (map[1][i] === 'x') {
            obj['1st floor'] += 1
        }
        if (map[2][i] === 'x') {
            obj['LG floor'] += 1
        }
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 'x') {
                count += 1
            }
        }
    }
    var result = "there are "
    if (count > 1) {
        result += count + " enemies: "
    } else {
        result += count + " enemy: "
    }
    for (var key in obj) {
        if (obj[key] > 1) {
            result += key + " " + obj[key] + " enemies, "
        } else if (obj[key] === 1) {
            result += key + " " + obj[key] + " enemy, "
        }
    }
    var hasil = result.substring(0, result.length - 2)
    return hasil
}

console.log(lookYourEnemy([
    ['x', '', 'x'],
    ['o', '', ''],
    ['', 'x', '']
]));

//there are 3 enemies: 2nd floor 2 enemies, LG floor 1 enemy


console.log(lookYourEnemy([
    ['x', '', 'x'],
    ['', 'o', 'x'],
    ['', 'x', 'x']
]));

//there are 5 enemies: 2nd floor 2 enemies, 1st floor 1 enemy, LG floor 2 enemies