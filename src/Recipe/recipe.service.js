import Recipe from "./Recipe.models.js";

export const getAllRecipes = async () => {
  try {
    const recipes = await ByCategoryNameWithLimit();
    return recipes;
  } catch (error) {
    console.error("failed to read all recipes");
    return null;
  }
};

export const getRecipesWithLimit = async (limit) => {
  try {
    const recipes = await Recipe.find({}).limit(limit);
    return recipes;
  } catch (error) {
    console.error("failed to read recipes");
    return null;
  }
};

export const getLatestRecipes = async (limit) => {
  try {
    const recipes = await Recipe.find({}).sort({ _id: -1 }).limit(limit);
    return recipes;
  } catch (error) {
    console.error("failed to read recipes");
    return null;
  }
};

export const getRecipesByCategoryName = async (categoryName) => {
  try {
    const recipes = await Recipe.find({ category: categoryName });
    return recipes;
  } catch (error) {
    console.error("failed to read recipes");
    return null;
  }
};


export const getRecipebyId = async (id) => {
  try {
    const recipe = await Recipe.findById(id);
    return recipe;
  } catch (error) {
    console.error("failed to read recipe");
    return null;
  }
};