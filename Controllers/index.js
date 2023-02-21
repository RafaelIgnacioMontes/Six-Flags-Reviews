const Rcoaster = require('../models/rollercoasters')

const createReview = (req, res) => {
  try {
    console.log(req.params.id, 'req.params.id')
    console.log(req.body, 'req.body')
    Rcoaster.findById(req.params.id, function (err, Rcoasterdoc) {
      Rcoasterdoc.reviews.push(req.body)
      console.log(Rcoasterdoc)
      Rcoasterdoc.save()
    })
    //   const reviewFind = await Rcoaster.findById(req.params.id)
    //   const review = await new reviewSchema(req.body)
    //   await review.save()

    //   reviewFind.reviews.push(review._id)
    //   reviewFind.save()
    //   return res.status(201).json({
    //     review
    //   })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
    return res.status(200).json({ reviews })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReviewById = async (req, res) => {
  try {
    const { id } = req.params
    const review = await Review.findById(id)
    if (review) {
      return res.status(200).json({ plant })
    }
    return res.status(404).send('Review with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Review.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Review deleted')
    }
    throw new Error('Review not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(review)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getAllRides = async (req, res) => {
  try {
    const rides = await Rcoaster.find()
    return res.status(200).json({ rides })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const createRides = async (req, res) => {
  try {
    const rides = await new Rcoaster(req.body)
    await rides.save()
    return res.status(201).json({
      rides
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const deleteRide = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Rcoaster.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Ride deleted')
    }
    throw new Error('Review not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createReview,
  getAllReviews,
  getReviewById,
  deleteReview,
  updateReview,
  getAllRides,
  createRides,
  deleteRide
}
