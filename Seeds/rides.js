const db = require('../db')
const rollercoasters = require('../models/rollercoasters')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rcoasters = [
    {
      name: 'Jersey Devil Coaster',
      picture: 'https://rcdb.com/aafxzca',
      year: '2021',
      height: '48"',
      time: ''
    }
  ]
}
