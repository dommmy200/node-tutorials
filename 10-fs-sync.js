
//synchronous read-write files
const { readFileSync, writeFileSync } = require('fs')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)
//overwrite previous file
writeFileSync('./content/result-sync.txt', `Both files are combined:\n\n${first}\n${second}`)
//append to previous file
writeFileSync('./content/result-sync2.txt', `Both files are combined:\n\n${first}\n${second}`, { flag: 'a' })