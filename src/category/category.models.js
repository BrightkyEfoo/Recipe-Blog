import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "name field is required",
  },
  image: {
    type: String,
    required: "image field is required",
  },
});

const categoryModel = mongoose.model("Category", categorySchema);

export default categoryModel;