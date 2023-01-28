const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')

const crudRouter = require('./routes/crudrouter')

const app = express()
app.use(express.json())
app.set('json spaces', 1)
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use('/', crudRouter)

mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE_URL)
app.listen(process.env.PORT)