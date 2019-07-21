const fs = require('fs')

class AirportList {
    static readFile(cb) {
        fs.readFile(__dirname + '/airport.txt', 'utf8', (err, data) => {
            if(err) {
                cb(err, null)
            } else {
                const str = data.split(' ').filter(el => {
                    if ( el[0] === '(' && el.length < 6 ) {
                       return el
                    }
                }).map( el => el.slice(1, el.length-1).toUpperCase()).sort()
                cb(null, str) 
            }
        })
    }
}

module.exports = AirportList