const express = require('express')
const app = express()
const heroes = require('../associations')

app.get('/', (req,res)=>{
    res.json(heroes)
})

module.exports = app