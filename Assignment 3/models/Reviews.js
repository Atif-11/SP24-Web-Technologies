const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    customerName: { type: String, required: true },
    reviewContent: String,
    rating: Number,
    datePosted: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
