//test all files between 1 and 7
const names = require('./4-names')
const {sayHi} = require('./5-utils')
const aName = require('./6-alternative-flav')
console.log(aName)
console.log(names)
require('./7-mind-grenade')
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
