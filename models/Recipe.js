const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    steps: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    cookingTime: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
