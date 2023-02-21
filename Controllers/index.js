const Review = require("../models/reviews");
const Rcoaster = require("../models/rollercoasters");

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body);
    await review.save();
    return res.status(201).json({
      review,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);
    if (review) {
      return res.status(200).json({ plant });
    }
    return res.status(404).send("Review with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Review.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Review deleted");
    }
    throw new Error("Review not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(review);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createReview,
  getAllReviews,
  getReviewById,
  deleteReview,
  updateReview,
};
