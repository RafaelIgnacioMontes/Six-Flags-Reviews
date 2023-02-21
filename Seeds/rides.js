const db = require('../db')
const rollercoasters = require('../models/rollercoasters')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rcoasters = [
    {
      name: 'Jersey Devil Coaster',
      picture: 'https://rcdb.com/aafxzca',
      year_built: '2021',
      height_requirement: '48"',
      ride_time: '2:05',
      max_speed: '58mph',
      intensity: 'Maximum'
    },
    {
      name: 'Green Lantern',
      picture:
        'https://static.wikia.nocookie.net/sixflags/images/6/67/GreenLanternSFGADV.jpg/revision/latest?cb=20180629095710',
      year_built: ''
    }
  ]
}
