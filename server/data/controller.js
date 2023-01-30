const { json } = require('express')

const object = require('../data/model')

const getObjects = async (req, res) => {
    const objectList = await object.find()
    res.status(200).json(objectList)
}

const getObject = async (req, res) => {
    if (req.params.id === "favicon.ico") {return}
    const id = req.params.id
    const objectQuerybyName = await object.findById(id)
    const selectDatabase = objectQuerybyName
    res.status(200).json(selectDatabase)
}

const addObject = async (req, res) => {
    const datetime = new Date()
    const year = datetime.getUTCFullYear()
    const month = datetime.getUTCMonth() + 1
    const day = datetime.getUTCDate()
    const hours = datetime.getUTCHours()
    const minutes = datetime.getUTCMinutes()
    const formattedDatetime = (year + "-" + month + "-" + day + " " + hours + ":" + minutes)

    const newobject = new object({
        datetime: formattedDatetime,
        data: req.body.data
    });
    const newCreatedobject = await newobject.save()
    res.status(201).json(newCreatedobject)
}

const deleteObject = async (req, res) => {
    const deletedObject = await object.findOneAndDelete({name: req.params.name})
    res.status(200).json(deletedObject)
}

module.exports = { getObjects, getObject, addObject, deleteObject }