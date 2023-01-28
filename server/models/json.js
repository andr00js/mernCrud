const mongoose = require('mongoose')

const jsonSchema = new mongoose.Schema({
    name: String,
    datetime: String,
    database: Object
})

module.exports = mongoose.model('jsons', jsonSchema)