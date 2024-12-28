//built-in module
const os = require('os')
const user = os.userInfo()
console.log(user)

//system uptime in seconds
console.log(`System uptime: ${os.userInfo()} seconds.`)
const currentOs = {
    Name:os.type(),
    Release:os.release(),
    TotalMemory:os.totalmem(),
    FreeMemory:os.freemem(),
}
console.log(currentOs)