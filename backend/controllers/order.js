import Order from "../models/Order.js";
import User from "../models/User.js";

export const getAllOrders = async (req, res) => {
    try {
      const orders = await Order.findAll({ include: { model: User, as: "user" } });
      res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve orders" });
    }
  };

export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve order" });
    }
};

export const createOrder = async (req, res) => {
    try {
        const { userId, products, total } = req.body;
        if (!userId || !products || !total) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newOrder = await Order.create({ userId, products, total });
        res.status(201).json(newOrder);
    } catch (error) {
        console.error("There was an error creating the data", error);
    }
};

export const updateOrder = async (req, res) => {
    const updateOrder = await Order.findByPk(req.params.id);
    if (!updateOrder) {
        return res.status(404).json({ status: "failed", message: "Order not found" });
    }
    try {
        const { id } = req.params;
        const { userId, products, total } = req.body;
        await Order.update({ userId, products, total }, { where: { id } });
        res.status(200).json(updateOrder);
    } catch (error) {
        console.error("There was an error updating the data", error);
    }
};

export const deleteOrder = async (req, res) => {
    const deleteOrder = await Order.findByPk(req.params.id);
    if (!deleteOrder) {
        return res.status(404).json({ status: "failed", message: "Order not found" });
    }
    try {
        const { id } = req.params;
        await Order.destroy({ where: { id } });
        res.status(200).json(deleteOrder);
    } catch (error) {
        console.error("There was an error deleting the data", error);
    }
};


