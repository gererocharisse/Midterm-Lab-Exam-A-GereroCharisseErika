const fs = require('fs')

const employee = function(oldNote) {
    let emploNote = JSON.parse(oldNote)

    let nNote = emploNote.map(function(n){
        return n.employee
    })

    console.log("Employee: John, Ruel, Johnson, Jessa" + nNote)

}
module.exports = employee