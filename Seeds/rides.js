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
      intensity: 'Maximum'
    },
    {
      name: 'Green Lantern',
      picture:
        'https://static.wikia.nocookie.net/sixflags/images/6/67/GreenLanternSFGADV.jpg/revision/latest?cb=20180629095710',
      year_built: '2011',
      height_requirement: '54"',
      ride_time: '2:30',
      max_speed: '64mph',
      intensity: 'Maximum'
    },
    {
      name: 'Houdinis great escape',
      picture:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfga-houdinisgreatescape_1440x1533_0-1-768x818.jpg',
      year_built: '1999',
      height_requirement: 'Adult(none)  Child: 48" No Lap Children',
      ride_time: 'unknown',
      max_speed: 'slow',
      intensity: 'Mild'
    }
  ]
  await Rcoaster.insterMany(Themeparks)
  console.log('Created some rides')
}
const run = async () => {
  await main()
  db.close()
}

run()
