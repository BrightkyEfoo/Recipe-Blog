import express from "express";
import expressLayouts from "express-ejs-layouts";
import fileUpload from 'express-fileupload'
import session from "express-session";
import cookieParser from 'cookie-parser'
import flash from 'connect-flash'
import dotenv from "dotenv";
import RecipeRouter from "./Recipe/Recipe.routes.js";
import HomepageRouter from "./Homepage/homepage.routes.js";
import CategoryRouter from "./category/category.routes.js";


const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

app
  .use(express.urlencoded({ extended: true }))
  .use("/public", express.static("public"))
  .use(expressLayouts)
  .use(cookieParser('CookingBlogSecure'))
  .use(session({
    secret: 'CookingBlogSecure',
    saveUninitialized: true,
    resave: true
  }))
  .use(flash())
  .use(fileUpload());

app.set(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./layout/main");

app.use("/", HomepageRouter);
app.use("/recipe", RecipeRouter);
app.use("/category", CategoryRouter);
app.listen(port, () => {
  console.log(`Notre serveur tourne sur http://localhost:${port}`);
  import("./db/dbInit.js");
});
