const Task = require('../Models/TaskModel')
const ValidateTask = require('../Controllers/ValidateTask')
// ======================================

// Display all the tasks
const allTasks = async (req,res) => {
    try {
        let tasks = await Task.find({})
        
        res.status(200)
        res.send(tasks)
    } catch (error) {
        res.status(400)
        res.send(error)
    }
}

// Add new task
const addTask = async (req,res) => {

    let task = {
        title:req.body.title.trim()
    }

    const {error} = ValidateTask(task)

    if(error){
        res.status(400)
        res.send(error)
    }else{
        // Task Data
        let taskTitle = task.title.trim()

        try {

            let task = {
                title:taskTitle
            }

            task = new Task(task)
            await task.save()

            res.status(200)
            res.send('Task added!')
            
        } catch (error) {
            res.status(400)
            res.send("Task wasn't add!")
        }
    }
}

// Updating done status

const changeStatus = async (req,res) => {
    // Receiving the data
    let id = req.params.id

    try {
        let task = await Task.findById(id)
              
        let updatedData = {
            done:!task.done
        }

        let updateTask = await Task.findByIdAndUpdate(id,updatedData)

        res.status(200)
        res.send("Task updated!")
    
    } catch (error) {
        res.status(400)
        res.send("Task wasn't update!")
    }
}

// Delete task
const deleteTask = async (req,res) => {
    let id = req.params.id

    try {
        await Task.findByIdAndRemove(id)

        res.status(200)
        res.send('Task deleted!')
    } catch (error) {
        res.status(400)
        res.send("Task wasn't delete!")
    }
}

module.exports = {addTask,allTasks,deleteTask,changeStatus}