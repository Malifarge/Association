const express = require('express')
const moment = require('moment')
const app = express()
const associations = require('../associations')
const messagesList = require('../messages') 
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
    messages.date=moment().format('MM YYYY hh:mm:ss')
    messagesList.push(messages)
    res.json(messages)
})

app.get('/:slug/messages',verifyassociation, (req,res)=>{
    const messages = messagesList.filter(message=>{
        return message.slug === req.params.slug
    })

    messages.sort((a,b)=> b.date.localeCompare(a.date))

    res.json(messages)
})

module.exports = app