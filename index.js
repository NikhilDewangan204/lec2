const express = require("express")
const app = express()

require('dotenv').config()
const port = process.env.PORT;

app.get('/', (req,res) => {
    res.send("Hello world!")
})

app.get('/login', (req, res) => {
    res.send("You have logged in")
})

app.listen(port, () => {
    console.log(`Your app is listening in port no. ${port}`)
})