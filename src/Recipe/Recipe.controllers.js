import path from "path";
import { getRecipebyId } from "./recipe.service.js";
import Recipe from "./Recipe.models.js";
/**
 * GET /health-check
 * for handling a simple route of recipe router
 */
export const healthCheckController = (req, res) => {
  return res.sendStatus(200);
};

export const getRecipeByIdhandler = async (req, res) => {
  const id = req.params.id;
  try {
    const recipe = await getRecipebyId(id);
    res.render("recipe", {
      title: "Cooking Blog - Recipe : " + recipe.name,
      stylesheet: "recipe",
      recipe,
    });
  } catch (error) {
    res.sendStatus(404);
  }
};

export const getSumbitPageHandler = (req, res) => {
  return res.render("submit" , {
    title : "Submit Recipe",
    stylesheet : "submit"
  });
};

export const postRecipeHandler = async (req, res) => {
  console.log(req.file)

  try {
    let imageUploadFile;
    let uploadPath;
    let newImageName;

    imageUploadFile = req.files.image
    newImageName = Date.now() + imageUploadFile.name;
    uploadPath = path.join('public', 'uploads', newImageName)

    imageUploadFile.mv(uploadPath, (err) =>{
      if(err) return res.status(500).send(err)
    })

    const newRecipe = new Recipe({
      name: req.body.name,
      email: req.body.email,
      description: req.body.description,
      ingredients: req.body.ingredients,
      category: req.body.category,
      image: newImageName,
    })

    await newRecipe.save()
    res.redirect('/recipe/submit')
  } catch (error) {
    console.log("error", error)
  }
};
