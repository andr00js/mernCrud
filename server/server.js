 //Create Express app
 const dotenv = require('dotenv').config()
 const express = require('express')
 const app = express()
 const cors = require('cors')
 app.use(cors())

 //Input parsing middleware
 app.use(express.json())
 app.set('json spaces', 1)
 app.use(express.urlencoded({extended: false}))

 //Load jsonRouter
 const jsonRouter = require('./routes/jsons')
 app.use('/jsons/', jsonRouter)

 //Load and connect MongoDB database
 const mongoose = require('mongoose')
 mongoose.set('strictQuery', false)
 mongoose.connect(process.env.DATABASE_URL)

 //Listen for clients on TCP port
 app.listen(process.env.PORT)