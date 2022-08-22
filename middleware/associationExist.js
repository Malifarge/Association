const associations = require('../associations')

const verifyassociation = (req, res, next) => {

    const { slug } = req.params
    const association = associations.find(association => association.slug===slug)


  if (association) {
    req.association= association
    next()
  } else {
    res.status(404).json('associations not found')
  }
}

module.exports = {
  verifyassociation
}