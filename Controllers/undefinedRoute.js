
const undefined = (req,res) => {
    let route = req.params[0]

    res.status(404)
    res.send(`Route ${route} don't exist!`)
}

module.exports = undefined