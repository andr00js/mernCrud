
const { json } = require('express')
//Load Schema
const JSON = require('../models/JSON')

//Define Controller
const getJSONS = async (req, res) => {
    const JSONList = await JSON.find()
    res.status(200).json(JSONList)
}

const getJSON = async (req, res) => {
    const JSONQuerybyName = await JSON.find({name: req.params.name})
    const selectDatabase = JSONQuerybyName[0]
    res.status(200).json(selectDatabase)
}

const addJSON = async (req, res) => {
    const datetime = new Date()
    const year = datetime.getUTCFullYear()
    const month = datetime.getUTCMonth() + 1
    const day = datetime.getUTCDate()
    const hours = datetime.getUTCHours()
    const minutes = datetime.getUTCMinutes()
    const formattedDatetime = (year + "-" + month + "-" + day + " " + hours + ":" + minutes)

    const newJSON = new JSON({
        name: req.body.name, 
        datetime: formattedDatetime,
        database: req.body.database
    });
    const newCreatedJSON = await newJSON.save()
    res.status(201).json(newCreatedJSON)
}

const deleteJSON = async (req, res) => {
    const deletedJSON = await JSON.findOneAndDelete({name: req.params.name})
    res.status(200).json(deletedJSON)
}

const updateJSON = async (req, res) => {
    if (req.body.name != null){
        const updateJSON = await JSON.findOneAndUpdate({name: req.params.name}, {name: req.body.name})}
    if (req.body.password != null){
        const updateJSON = await JSON.findOneAndUpdate({name: req.params.name}, {password: req.body.password})}
    const updatedJSON = await JSON.findOne({name: req.body.name})
    res.status(200).json(updatedJSON)
}

//Export Controller
module.exports = {
    getJSONS, 
    getJSON, 
    addJSON, 
    deleteJSON, 
    updateJSON
}