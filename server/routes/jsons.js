//Load Express Router
const express = require('express')
const router = express.Router()

//Connect Routes to Controller
const {
    getJSONS, 
    getJSON, 
    addJSON, 
    deleteJSON, 
    updateJSON
} = require('../controllers/JSON')
const { update } = require('../models/JSON')
router.route('/').get(getJSONS).post(addJSON)
router.route('/:name').get(getJSON).patch(updateJSON).delete(deleteJSON)

//Export JSONRouter
module.exports = router