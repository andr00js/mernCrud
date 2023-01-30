const mongoose = require('mongoose')

const objectSchema = new mongoose.Schema({
    datetime: String,
    data: Object
})

module.exports = mongoose.model('object', objectSchema)