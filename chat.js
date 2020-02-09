const express = require("express")
const app = express()
const http = require("http").createServer(app);
const io = require('socket.io')(http)
require('dotenv').config()

const port = process.env.PORT

app.use(express.static('public'))

io.on('connection', client => {
    client.on('chat message', msg => {
        console.log("SendMessage")
        io.emit("chat message", msg)
        console.log("BroadcastMessage")
    })
})

http.listen(port, () => console.log(`Listening on port ${port}!`))