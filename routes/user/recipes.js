const express = require('express');
const router = express.Router();
const { saveRecipe, getSavedRecipes, deleteSavedRecipe, addToHistory, getHistory, getIfSaved } = require('../../controllers/user/recipeControllers.js');

router
    .post('/saved', saveRecipe)
    .delete('/saved', deleteSavedRecipe)
    .get('/saved/:userId', getSavedRecipes)
    .get('/isSaved', getIfSaved)

router
    .post('/history', addToHistory)
    .get('/history/:userId', getHistory);

module.exports = router;