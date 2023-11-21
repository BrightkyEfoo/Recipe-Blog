import { getLatestRecipes, getRecipesWithLimit } from "../Recipe/recipe.service.js";
import { getCategoriesWithLimit } from "../category/category.service.js";

/**
 * GET /
 * HOMEPAGE
 */
export const homepageController = async (req, res) => {
  const categories = await getCategoriesWithLimit(5);
  const recipes = await getLatestRecipes(5);
  console.log('recipes', recipes)
  res.render("index", {
    title: "Cooking Blog - Home",
    stylesheet: "home",
    categories,
    recipes
  });
};

/**
 * GET /health-check
 * for handling a simple route of recipe router
 */
export const healthCheckController = (req, res) => {
  return res.sendStatus(200);
};
