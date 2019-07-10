/*
* Logic Challenge: Melee Ranged Grouping
* Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.
* Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...
* Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]
* Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    let tmpArr = [];
    let tmpStr = '';
    let tmpFinal = [[],[]];

    if (str.length === 0) {
        return [];
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ',') {
            tmpStr += str[i];
        }
        
        if ((str[i] === ',') || (i === str.length-1)) {
            tmpArr.push(tmpStr);
            tmpStr = '';
        }
    }

    for (let i = 0; i < tmpArr.length; i++) {
        let tmpSub = '';
        let name = '';
        let group = '';

        for (let j = 0; j < tmpArr[i].length; j++) {
            if (tmpArr[i][j] !== '-') {
                tmpSub += tmpArr[i][j];
            }

            if (tmpArr[i][j] === '-') {
                name = tmpSub;
                tmpSub = '';
            }

            if (j === tmpArr[i].length-1) {
                group = tmpSub;
                tmpSub = '';                
            }
        }

        if (group === 'Ranged') {
            tmpFinal[0].push(name);
        }

        if (group === 'Melee') {
            tmpFinal[1].push(name);
        }
    }

    return tmpFinal;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []