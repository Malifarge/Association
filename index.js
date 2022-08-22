const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const port = 5000

const associationsRoutes = require('./routes/associations')

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

app.use('/associations', associationsRoutes)
app.listen(port, () => {
  console.log(`Server running on ${port}`)
})