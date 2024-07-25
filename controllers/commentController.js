const Comment = require('../models/Comment');

exports.getCommentsByRecipeId = async (req, res) => {
    try {
        const comments = await Comment.find({ recipeId: req.params.recipeId });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createComment = async (req, res) => {
    const { recipeId, text } = req.body;
    const newComment = new Comment({ recipeId, text });
    try {
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
