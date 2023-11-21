import mongoose from "mongoose";
import categoryInitializer from "../category/category.mock.js";
import recipeInitializer from "../Recipe/Recipe.mock.js";

mongoose
  .connect(process.env.MONGODB_URI)
  .then((_) => {
    console.log("connection to mongodb succeded");
  })
  .catch((err) => {
    console.error("connection to mongodb failed");
  });

// recipeInitializer()
  
// try {
//   const connection = await mongoose.connect(process.env.MONGODB_URI);
//   console.log("connection to mongodb succeded");
// } catch (error) {
//   console.error("connection to mongodb failed");
// }

// export const db = mongoose.connection;

// db.on("error", () => {
//   console.error("connection to mongodb failed");
// });

// db.once("open", () => {
//   console.log("connection to mongodb succeded");
// });

// categoryInitializer()
