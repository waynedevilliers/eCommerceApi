import express from "express";
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from "../controllers/category.js";

const categoryRouter = express.Router();

// get all categories
categoryRouter.get("/", getAllCategories);

// get category by id
categoryRouter.get("/:id", getCategoryById);

// create category
categoryRouter.post("/", createCategory);   

// update category
categoryRouter.put("/:id", updateCategory);

// delete category
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter; 