const http = require('http')
// const server = http.createServer((req, res) => {
//     console.log(req)
//     res.write('Welcome to our homepage!')
//     res.end()
// })
// server.listen(5000)
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Home page!')
    }
    if (req.url === '/about') {
        res.end('This is our history!!')
    }
    res.end(`
        <h1>Oop!!!</h1>
        <p>Page not found</p>
        <a href="/">Back Home</a>`)
})
server.listen(5000)