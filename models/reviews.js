const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Reviews = new Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true }
})
