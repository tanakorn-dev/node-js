const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/') {
        res.write('<html>')
        res.write('<header><title>Enter Message></title></header>')
        res.write('<body>')
        res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>')
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    
    if (url === '/create-user' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            console.log(message)
            return res.end()
        })
    }
    res.end()
})

server.listen(3000)