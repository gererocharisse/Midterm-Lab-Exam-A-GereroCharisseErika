const write = require('./write')
const read = require('./read')
const present = require('./present')
const add = require('./add')
const employee = require('./employee')

const cmd = process.argv

var note = {}

if (cmd[2] == 'add') {
    note = {
        employee: cmd[3],
        role: cmd[4],
        department: cmd[5]
    }

    var oldNote = read()
    add (note, oldNote)
}

if (cmd[2] == 'read'){
    present(read())
}

if (cmd[2] == 'employee') {
    employee(read())
}