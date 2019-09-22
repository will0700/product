const express = require('express')
const app = express()

app.use(express.json())

// app.use(express.static(__dirname + "/public/dist/public"))

require("./server/config/mongoose")
require('./server/config/routes')(app)

// app.all('*', (req, res) => res.sendFile(__dirname + '/public/dist/public/index.html'))

app.listen(8000, console.log("listening on port 8000"))