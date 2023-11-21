import mongoose from 'mongoose'

const recipe = new mongoose.Schema({
    name: {
      type: String,
      required: "name field is required",
    },
    description: {
      type: String,
      required: "description field is required",
    },
    email: {
      type: String,
      required: "email field is required",
    },
    category: {
      type: String,
      enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian', 'Chinese'],
      required: "category field is required",
    },
    ingredients: {
      type: Array,
      required: "ingredients field is required",
    },
    image: {
      type: String,
      required: "image field is required",
    },
  });
  
  const recipeModel = mongoose.model("Recipe", recipe);
  
  export default recipeModel;