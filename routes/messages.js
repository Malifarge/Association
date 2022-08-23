const express = require('express')
const moment = require('moment')
const app = express()
const messagesList = require('../messages') 
const {checkifexist} = require('../middleware/messages')

app.post('/', checkifexist, (req,res)=>{
    const messages = {
        object: req.body.object,
        content: req.body.content,
        association: req.body.association,
        date: moment().format() 
    }
    messagesList.push(messages)
    res.json(messages)
})

app.get('/', (req,res)=>{

    const messages = messagesList

    messages.sort((a,b)=> b.date.localeCompare(a.date))

    res.json(messages)
})

module.exports = app