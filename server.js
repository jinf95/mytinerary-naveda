require('dotenv').config()

const express = require("express")
const cors = require ("cors")
const Router = require('./routes/routes')

require('./config/database')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', Router)  


app.listen(4000, () => {
    console.log("Esta Corriendo servidor 4000")
})