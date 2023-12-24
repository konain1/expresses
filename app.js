
// __dirname  -  current directory name
// __filename - filename
// process - info about new env where the program is being executed

// console.log(__dirname)
// console.log(__filename)

// console.log(process)
// console.log(module)

const names = require('./names.js')
const sayhi = require('./fun.js')

sayhi('konain')
sayhi(names.sadaf)
