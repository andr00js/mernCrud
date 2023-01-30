const express = require('express')
const router = express.Router()

const { getObjects, getObject, addObject, deleteObject } = require('../data/controller')

router.route('/').get(getObjects).post(addObject)
router.route('/:id').get(getObject).delete(deleteObject)

module.exports = router