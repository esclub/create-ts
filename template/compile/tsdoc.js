const fs = require('fs')
let content = fs.readFileSync(__dirname + '/../lib/percent.doc.ts')
console.log(content)