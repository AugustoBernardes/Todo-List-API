const express = require('express')
const router = express.Router()
// ======================================
// Importing the controllers
const {addTask,allTasks,changeStatus,deleteTask} = require('../Controllers/TasksController')
// ======================================

// GET
router.get('/', allTasks)
// POST
router.post('/addtask',addTask)
// PUT
router.put('/updatetask/:id',changeStatus)
// DELETE
router.delete('/deletetask/:id',deleteTask)

module.exports = router