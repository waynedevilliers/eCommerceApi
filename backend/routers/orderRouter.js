import express from "express";
import { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } from "../controllers/order.js";

const orderRouter = express.Router();

// get all orders
orderRouter.get("/", getAllOrders);

// get order by id
orderRouter.get("/:id", getOrderById);

// create order
orderRouter.post("/", createOrder);

// update order
orderRouter.put("/:id", updateOrder);

// delete order
orderRouter.delete("/:id", deleteOrder);

export default orderRouter; 