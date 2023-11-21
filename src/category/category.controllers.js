import { getRecipesByCategoryName } from "../Recipe/recipe.service.js";
import { getAllCategory, getCategoryByName } from "./category.service.js";

export const categoryController = async (req, res) => {
  const categories = await getAllCategory();
  res.render("explore-categories", {
    title: "Cooking Blog - Explore Categories",
    stylesheet: "categories",
    categories,
  });
};

export const categoryControllerByName = async (req, res) => {
  const name = req.params.name;
  const category = await getCategoryByName(name);
  const recipes = await getRecipesByCategoryName(name);
  res.render("explore-category", {
    title: "Cooking Blog - Explore category : " + name,
    stylesheet: "category",
    category,
    recipes,
  });
};
