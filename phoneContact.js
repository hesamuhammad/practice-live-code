var contacts = [{
    Id: 1,
    name: 'Andi',
    gender: 'male',
    group_ids: [1, 2, 3]
}, {
    Id: 2,
    name: 'Budi',
    gender: 'male',
    group_ids: [1, 2]
}, {
    Id: 3,
    name: 'Cindy',
    gender: 'male',
    group_ids: [1]
}, {
    Id: 4,
    name: 'David',
    gender: 'male',
    group_ids: [1, 2]
}, {
    Id: 5,
    name: 'Emily',
    gender: 'male',
    group_ids: [1, 2, 3]
}]


var groups = [{
    id: 1,
    name: 'Teman SMP'
}, {
    id: 2,
    name: 'Teman SMA'
}, {
    id: 3,
    name: 'Teman Kuliah'
}]

function showContactByGroup(group_name) {
    //your code here...
    var result = [];
    var simpanID = 0;
    for (let i = 0; i < groups.length; i++) {
        if (group_name === groups[i]['name']) {
            simpanID = groups[i]['id']
        }
    }
    for (let j = 0; j < contacts.length; j++) {
        for (let k = 0; k < contacts[j]['group_ids'].length; k++) {
            if (contacts[j]['group_ids'][k] === simpanID) {
                if (contacts[j]['gender'] === "male") {
                    result.push(contacts[j]['name'])
                } else {
                    result.unshift(contacts[j]['name'])
                }
            }
        }
    }
    console.log(result)
}

showContactByGroup('Teman Kuliah')
//["Andi", "Emily"]
showContactByGroup('Teman SMA')
    //["Andi", "Budi", "David", "Emily"]