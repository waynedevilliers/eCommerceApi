import express from "express";
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/user.js"; 

const userRouter = express.Router();

// get all users
userRouter.get("/", getAllUsers);

// get user by id
userRouter.get("/:id", getUserById);

// create user
userRouter.post("/", createUser);

// update user
userRouter.put("/:id", updateUser);

// delete user
userRouter.delete("/:id", deleteUser);

export default userRouter;
