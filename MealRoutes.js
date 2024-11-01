const { Router } = require('express');
const router = Router();



const {getMeal, saveMeals, editMeal, deleteMeal} = require('./MealController');




router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.put('/editMeal', editMeal);
router.delete('/deleteMeal', deleteMeal);

module.exports = router;