const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { dbConnection } = require('./database/config')

const app = express()
dbConnection()

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/events', require('./routes/events.routes'))

app.listen(process.env.PORT, () => {
  console.log(`Server in port ${process.env.PORT}`)
})