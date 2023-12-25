
const {readFileSync,writeFileSync} = require('fs');


let alchemist = readFileSync('book1.txt','utf-8')

let mybook = writeFileSync(`myownbook.txt`,`this is book store ${alchemist}` , {flag:'a'})
console.log(alchemist) 