const fs = require('fs')
let content = fs.readFileSync(__dirname + '/../lib/percent.doc.ts').toString()

let md = content.trim().replace(/\;\`([\s\S]*?)^\`/gm, function(source, $1){
  return '```\r\n' + $1.replace(/\\\`/g,'`') + '```ts'
})
md = md.trim().replace(/^\`\`\`/,'')
md +="\r\n```"
md = md.trim()
md = md.replace(/"\.\.\/lib\"/g,"\"percent-demo\"")
md = md.replace(/\/\/ \@tsrun:hidden begin[\s\S]*\/\/ \@tsrun:hidden end/g, '')

md = md.replace(/\`\`\`ts([\s\S]*)\`\`\`/gm, function (source, $1) {
  return '```ts\r\n' + $1.trim() + '\r\n```'
})

fs.writeFileSync("./tsdoc.md", md)
