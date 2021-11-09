const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
// ======================================
// Importing Routes
const tasks = require('./Routes/tasksRoute')
const undefinedRoute = require('./Controllers/undefinedRoute')
// ======================================

// Dotenv variables
const PORT = process.env.PORT || 8080
const DB_KEY = process.env.DB_KEY

// ======================================
// Connecting with DataBase
mongoose.connect(DB_KEY)

const db = mongoose.connection

db.once('error', () => {console.log(`DataBase wasn't load!`)})
db.once('open', () => {console.log(`DataBase loaded!`)})

// ======================================
// Setting cors , urlencoded and routes
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use('/',tasks)
app.use('*', undefinedRoute)

// ======================================
// Server Running
app.listen(PORT,() => {console.log(`Server running on PORT:${PORT}`)})