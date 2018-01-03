const express = require('express')

const server = express()

server.listen(7000, () => {
   console.log('server running at http://localhost:7000')
})