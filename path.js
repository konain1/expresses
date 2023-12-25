
const path = require('path')

// console.log(path.sep)



// both can work 
let filepath = path.join('content','subfolder','file.txt')
// let filepath = path.join('content','file.txt')


// file base name with extention
let base = path.basename(filepath)


// it will show only extention of the file
let ext = path.extname(base)
console.log(ext)

// it shows the absolute path of the file and the system
let absolute = path.resolve(__dirname,'content','subfolder','file.txt')

console.log(absolute)