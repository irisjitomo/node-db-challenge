const express = require('express')

const server = express();

const projectRouter = require('./router/projectRouter')

server.use(express.json())
server.use('/api', projectRouter)

server.get('/testing', (req, res) => {
    res.json('hello')
})

const port = 7000
server.listen(port , console.log(`listening on port ${port}`))