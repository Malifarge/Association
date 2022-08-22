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

app.post('/:slug/messages',verifyassociation, (req,res)=>{
    const {slug} = req.params
    const messages = req.body
    messages.slug=slug
    res.json(messages)
    
})

module.exports = app