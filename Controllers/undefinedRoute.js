
const undefined = (req,res) => {

    res.status(404)
    res.send(`Route don't exist! `)
}

module.exports = undefined