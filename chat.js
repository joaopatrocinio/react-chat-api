const express = require("express")
const app = express()
const http = require("http").createServer(app)
const io = require('socket.io')(http)
const database = require("./database.js")

require('dotenv').config()

const port = process.env.PORT

app.get("/", (req, res) => {
    res.send("Server is running.")
})

database.connectToServer((err) => {
    if (err) return console.log(err)

    console.log("DatabaseConnect")
    http.listen(port, () => console.log(`HTTPServerStart`))
    
    io.on('connection', client => {

        console.log("UserConnect")
        
        const db = database.getDb()
        const messages = db.collection("messages")
        console.log("DatabaseUserSessionStart")

        messages.find({}).toArray((err, results) => {
            if (err) throw err
            client.emit("previous messages", results)
            console.log("SendPreviousMessages")
        })

        client.on('chat message', msg => {

            messages.insertOne({
                user: "Anon",
                message: msg
            }, (err, result) => {
                if (err) throw err

                console.log("UserSendMessage")
                console.log("SaveMessageDB")

                io.emit("chat message", msg)
                console.log("MessageBroadcast")
            })
            
        })

        io.on('disconnect', (reason) => {
            console.log("UserDisconnect")
            db.close()
        });
    })
})