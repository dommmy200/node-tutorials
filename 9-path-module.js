const path = require('path')
console.log(path.sep)

const filePath = path.join('content', 'subfolder', 'test.txt')
const filePath1 = path.join('/content', 'subfolder', 'test.txt')
const filePath2 = path.join(path.sep, 'content', 'subfolder', 'test.txt')

console.log(filePath)
console.log(filePath1)
console.log(filePath2)

const base = path.basename(filePath2)
const extension = path.extname(filePath2)
console.log(base)
console.log('Base: ' + base, '\nExtension: ' + extension)

//necessary when running in different environments
const absolute = path.resolve(__dirname, 'subfolder', 'contents', 'test.txt')
console.log(absolute)