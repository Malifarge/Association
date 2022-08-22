const express = require('express')
const app = express()
const associations = require('../associations')
const {verifyassociation} = require('../middleware/associationExist')

app.get('/', (req,res)=>{
    res.json(associations)
})

app.get('/:slug',verifyassociation, (req,res)=>{
    res.json(req.association)
})

module.exports = app