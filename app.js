const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
// ======================================
// Routes
const tasks = require('./Routes/tasksRoute')
const undefinedRoute = require('./Controllers/undefinedRoute')
// ======================================

// Dotenv variables
const PORT = process.env.PORT || 8080
const DB_KEY = process.env.DB_KEY

// Connecting with DataBase
mongoose.connect(DB_KEY)

const db = mongoose.connection

db.once('error', () => {console.log(`DataBase wasn't load!`)})
db.once('open', () => {console.log(`DataBase loaded!`)})

app.use('/',tasks)
app.use('*', undefinedRoute)

app.listen(PORT,() => {console.log(`Server running on PORT:${PORT}`)})