const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Rcoaster = new Schema(
  {
    name: { type: String, required: true },
    picture: { type: String, required: true },
    year_built: { type: String, required: true },
    height_requirement: { type: String, required: true },
    ride_time: { type: String, required: true },
    max_speed: { type: String, required: true },
    intensity: { type: String, required: true },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Rcoaster', Rcoaster)
