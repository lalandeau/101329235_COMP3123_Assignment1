const express = require("express")
const mongoose  = require("mongoose")
const empRoutes = require("./routes/empModel")
const userRoutes = require("./routes/userModel")

const app = express()

const SERVER_PORT = 3001

app.use(express.json())
app.use(express.urlencoded())

const DB_CONNECTION_STRING = "mongodb+srv://Ellyn:Ellyn20@cluster0.cizcja0.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority"
mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    
app.use("/api/emp", empRoutes)
app.use("/api/user", userRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>Assignment 1 using MogoDB + Mongoose</h1>")
    })

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})