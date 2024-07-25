const express = require('express');
const router = express.Router();
const { getCommentsByRecipeId, createComment } = require('../controllers/commentController');

router.get('/recipe/:recipeId', getCommentsByRecipeId);
router.post('/', createComment);

module.exports = router;
