const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = reviewSchema
