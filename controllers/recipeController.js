const Recipe = require('../models/Recipe');

exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({message: 'Recipe not found'});
        res.json(recipe);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.createRecipe = async (req, res) => {
    const {title, description, ingredients, steps, image, cookingTime} = req.body;
    const newRecipe = new Recipe({
        title,
        description,
        ingredients,
        steps,
        image,
        cookingTime,
    });
    try {
        await newRecipe.save();
        res.json(newRecipe);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

exports.updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updatedRecipe) return res.status(404).json({message: 'Recipe not found'});
        res.json(updatedRecipe);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

exports.deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) return res.status(404).json({message: 'Recipe not found'});
        res.json({message: 'Recipe deleted'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
