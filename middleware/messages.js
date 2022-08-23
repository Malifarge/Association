const associations = require('../associations')

const checkifexist = (req, res, next) => {

    const slug  = req.body.association
    const association = associations.find(association => association.slug===slug)


  if (association) {
    req.association= association
    next()
  } else {
    res.status(404).json('associations not found')
  }
}

module.exports = {
    checkifexist
}