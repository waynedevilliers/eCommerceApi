import Product from "../models/Product.js";
import Category from "../models/Category.js";

export const getAllProducts = async (req, res) => {
  try {
    const { categoryId } = req.query;

    // Optionally filter by categoryId
    const whereClause = categoryId ? { categoryId } : {};

    const products = await Product.findAll({
      where: whereClause,
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve products" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve product" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, categoryId } = req.body;

    // Validate category existence
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(400).json({ error: "Invalid categoryId" });
    }

    const newProduct = await Product.create({ name, description, price, categoryId });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, categoryId } = req.body;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    if (categoryId) {
      // Validate category existence
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(400).json({ error: "Invalid categoryId" });
      }
    }

    await product.update({ name, description, price, categoryId });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await product.destroy();
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};

