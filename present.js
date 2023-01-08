const fs = require('fs')

const present = function(note) {
    let nNote = JSON.parse(note)

    console.log(nNote)
}
module.exports = present