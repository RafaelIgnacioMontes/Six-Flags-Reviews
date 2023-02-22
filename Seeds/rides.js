const db = require('../db')
const Rcoaster = require('../models/rollercoasters')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const Rcoasters = [
    {
      name: 'Jersey Devil Coaster',
      picture: 'https://rcdb.com/aafxzca',
      year_built: '2021',
      height_requirement: '48"',
      ride_time: '2:05',
      max_speed: '58mph',
      intensity: 'Maximum',
      reviews: []
    },
    {
      name: 'Green Lantern',
      picture:
        'https://sf-static.sixflags.com/wp-content/uploads/Green-Lantern-1440x1533-1-1440x720.jpg',
      year_built: '2011',
      height_requirement: '54"',
      ride_time: '2:30',
      max_speed: '64mph',
      intensity: 'Maximum',
      reviews: []
    },
    {
      name: 'Kingda Ka',
      picture:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfga-knigdaka_1440x1533_0-1-768x818.jpg',
      year_built: '2005',
      height_requirement: '54"',
      ride_time: ':50',
      max_speed: '128mph',
      intensity: 'Maximum',
      reviews: []
    }
  ]
  await Rcoaster.insertMany(Rcoasters)
  console.log('Created some rides')
}
const run = async () => {
  await main()
  db.close()
}

run()
