import Category from "./category.models.js";

export const getAllCategory = async () => {
  try {
    const categories = await getCategoriesWithLimit();
    return categories;
  } catch (error) {
    console.error("failed to read all categories");
    return null;
  }
};

export const getCategoriesWithLimit = async (limit) => {
  try {
    const categories = await Category.find({}).limit(limit);
    return categories;
  } catch (error) {
    console.error("failed to read categories");
    return null;
  }
};

export const getCategoryByName = async (name) => {
  try {
    const category = await Category.findOne({ name });
    return category;
  } catch (error) {
    console.error("failed to read category for name : " + name);
    return null;
  }
};
