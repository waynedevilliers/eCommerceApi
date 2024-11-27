import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
}; 

export const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
};

export const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newUser = await User.create({ name, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ status: "failed", message: "Error creating user" + error.message });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ status: "failed", message: "User not found" });
        }

        await User.update({ name, email, password }, { where: { id } });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ status: "failed", message: "Error updating user" + error.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ status: "failed", message: "User not found" });
        }

        await User.destroy({ where: { id } });
        res.status(200).json({ status: "success", message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: "failed", message: "Error deleting user" + error.message });
    }
};

