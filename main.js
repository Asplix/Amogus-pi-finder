const fs = require('fs');
const chalk = require('chalk')

fs.readFile('./pi-bin.txt', 'utf8', (err, data) => {
    let a = 0
    let p = 0
    let b = a


    while (p == 0) {

        if (JSON.stringify([data[a], data[a + 1], data[a + 2], data[a + 3]]) == a1) {
            console.log(dec_to_chalkb([data[a], data[a + 1], data[a + 2], data[a + 3]]))
        }else{
            console.log(dec_to_chalk([data[a], data[a + 1], data[a + 2], data[a + 3]]))
        }
        

        if (JSON.stringify([data[a], data[a + 1], data[a + 2], data[a + 3]]) == a1) {
            a = a + 4
            b = a

            if (JSON.stringify([data[b], data[b + 1], data[b + 2], data[b + 3]]) == a2) {
                console.log(dec_to_chalkb([data[b], data[b + 1], data[b + 2], data[b + 3]]))
                b = b + 4

                if (JSON.stringify([data[b], data[b + 1], data[b + 2], data[b + 3]]) == a3) {
                    console.log(dec_to_chalkb([data[b], data[b + 1], data[b + 2], data[b + 3]]))
                    b = b + 4

                    if (JSON.stringify([data[b], data[b + 1], data[b + 2], data[b + 3]]) == a4) {
                        console.log(dec_to_chalkb([data[b], data[b + 1], data[b + 2], data[b + 3]]))
                        console.log(a)
                        p = p+1
                        
                    }
                }
            }
        }

        if (data[a+4] == undefined) {
            p = p + 1
        }else{a = a + 4}
    }



});
const a1 = JSON.stringify(['0', '1', '1', '1'])
const a2 = JSON.stringify(['1', '1', '0', '0'])
const a3 = JSON.stringify(['1', '1', '1', '1'])
const a4 = JSON.stringify(['0', '1', '0', '1'])


function dec_to_chalk(aaa) {
    let v = ``
    for (let i = 0; i < aaa.length; i++) {
        if (aaa[i] == 1) {
            v = v + chalk.bgWhite(' ')
        } else {
            v = v + (' ')
        }
    }
    return v
}

function dec_to_chalkb(aaa) {
    let g = ``
    for (let i = 0; i < aaa.length; i++) {
        if (aaa[i] == 1) {
            g = g + chalk.bgRed(' ')
        } else {
            g = g + chalk.bgBlue(' ')
        }
    }
    return g
}


