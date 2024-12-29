const { log } = require('console')
const _ = require('lodash')
const pArray = [1, [2, [3, [4, [5]]]]]
const flattened = _.flattenDeep(pArray)

console.log(flattened)