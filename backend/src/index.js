const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors())
server.use(express.json())

const projectRoutes = require('./routes/ProjectRoutes')
server.use('/project', projectRoutes)

server.listen(3007, () => {
    console.log('API ATIVA')
})
