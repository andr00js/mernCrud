//Import mongoose
const mongoose = require('mongoose')

//Define schema
const jsonSchema = new mongoose.Schema({
    name: String,
    datetime: String,
    database: Object
})

//Assign and Export schema
const json = mongoose.model('jsons', jsonSchema)
module.exports = json