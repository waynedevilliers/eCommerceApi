import express from "express";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.js";

const productRouter = express.Router();

// get all products
productRouter.get("/", getAllProducts);

// get product by id
productRouter.get("/:id", getProductById);

// create product
productRouter.post("/", createProduct);

// update product   
productRouter.put("/:id", updateProduct);

// delete product
productRouter.delete("/:id", deleteProduct);

export default productRouter;