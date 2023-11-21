import Recipe from "./Recipe.models.js";

const initializer = async () => {
  try {
    await Recipe.insertMany([
      {
        name: "Recipe Name Goes Here",
        description: `Recipe Description Goes Here`,
        email: "recipeemail@raddy.co.uk",
        ingredients: [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        category: "American",
        image: "southern-friend-chicken.jpg",
      },
      {
        name: "Recipe Name Goes Here",
        description: `Recipe Description Goes Here`,
        email: "recipeemail@raddy.co.uk",
        ingredients: [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        category: "American",
        image: "southern-friend-chicken.jpg",
      },
      {
        name: "Recipe Name Goes Here",
        description: `Recipe Description Goes Here`,
        email: "recipeemail@raddy.co.uk",
        ingredients: [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        category: "American",
        image: "southern-friend-chicken.jpg",
      },
      {
        name: "Recipe Name Goes Here",
        description: `Recipe Description Goes Here`,
        email: "recipeemail@raddy.co.uk",
        ingredients: [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        category: "American",
        image: "southern-friend-chicken.jpg",
      },
      {
        name: "Recipe Name Goes Here",
        description: `Recipe Description Goes Here`,
        email: "recipeemail@raddy.co.uk",
        ingredients: [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        category: "American",
        image: "southern-friend-chicken.jpg",
      },
      {
        name: "Recipe Name Goes Here",
        description: `Recipe Description Goes Here`,
        email: "recipeemail@raddy.co.uk",
        ingredients: [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        category: "American",
        image: "southern-friend-chicken.jpg",
      },
      {
        name: "Recipe Name Goes Here",
        description: `Recipe Description Goes Here`,
        email: "recipeemail@raddy.co.uk",
        ingredients: [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        category: "American",
        image: "southern-friend-chicken.jpg",
      },
    ]);
  } catch (error) {
    console.log("err", +error);
  }
};

export default initializer