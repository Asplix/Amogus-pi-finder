const fs = require('fs');
const chalk = require('chalk')

fs.readFile('./pi-bin.txt', 'utf8', (err, data) => {
    let a = 0;
    let p = 0;
    let b = a

    while (p == 0) {
        if (JSON.stringify([data[a], data[a + 1], data[a + 2], data[a + 3]]) == pattern[0]) {
            console.log(dec_to_chalkb([data[a], data[a + 1], data[a + 2], data[a + 3]]))
            a = a + pattern.length;
            b = a
            for (let i = 1; i < pattern.length; i++) {
                if (JSON.stringify([data[b], data[b + 1], data[b + 2], data[b + 3]]) == pattern[i]) {
                    console.log(dec_to_chalkb([data[b], data[b + 1], data[b + 2], data[b + 3]]))
                    b = b + pattern.length
                    if (i + 1 == pattern.length) {
                        p = 1
                        console.log(a)
                    }
                } else {
                    i = pattern.length
                }
            }
        } else {
            console.log(dec_to_chalk([data[a], data[a + 1], data[a + 2], data[a + 3]]))
            a = a + 4
        }

        if (data[a + 4] == undefined) {
            p = p + 1
        }
    }
})
const pattern = [
    JSON.stringify(['0', '1', '1', '1']),
    JSON.stringify(['1', '1', '0', '0']),
    JSON.stringify(['1', '1', '1', '1']),
    JSON.stringify(['0', '1', '0', '1'])
]

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