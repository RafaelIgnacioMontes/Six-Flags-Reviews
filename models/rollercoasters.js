const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
)

const Rcoaster = new Schema(
  {
    name: { type: String, required: true },
    picture: { type: String, required: true },
    year_built: { type: String, required: true },
    height_requirement: { type: String, required: true },
    ride_time: { type: String, required: true },
    max_speed: { type: String, required: true },
    intensity: { type: String, required: true },
    reviews: [reviewSchema]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Rcoaster', Rcoaster)
