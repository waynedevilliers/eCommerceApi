import Category from "../models/Category.js";

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
}; 

export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
};

export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = await Category.create({ name });
        res.status(201).json(newCategory);
    } catch (error) {
        console.error("There was an error creating the data", error);
    }
};

export const updateCategory = async (req, res) => {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
        return res.status(404).json({ status: "failed", message: "Category not found" });
    }

    try {
        const { id } = req.params;
        const { name } = req.body;
        await Category.update({ name }, { where: { id } });
        res.status(200).json(category);
    } catch (error) {
        console.error("There was an error updating the data", error);
    }
};

export const deleteCategory = async (req, res) => {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
        return res.status(404).json({ status: "failed", message: "Category not found" });
    }
    try {
        const { id } = req.params;
        await Category.destroy({ where: { id } });
        res.status(200).json(category);
    } catch (error) {
        console.error("There was an error deleting the data", error);
    }
};
