const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");

const server = express()

server.use(bodyParser.json())
server.use(cors()); // Allow access from other origins, i.e. our react front-end
// serever.use(bodyParser.urlencoded())

server.use([
   require('./routes/artists')
])

server.get('/', (req, res) => {
   res.send(res)
})

server.listen(7000, () => {
   console.log('server running at http://localhost:7000')
})