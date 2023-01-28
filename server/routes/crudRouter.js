const express = require('express')
const crudRouter = express.Router()

const { getJSONS, getJSON, addJSON, deleteJSON, updateJSON } = require('../controllers/JSON')

crudRouter.route('/').get(getJSONS).post(addJSON)
crudRouter.route('/:name').get(getJSON).patch(updateJSON).delete(deleteJSON)

module.exports = crudRouter