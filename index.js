const express = require('express')

const server = express();

server.use(express.json())


const port = 7000
server.listen(port , console.log(`listening on port ${port}`))