import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

// CREATE a new user
router.post("/users", createUser);

// READ all users
router.get("/users", getUsers);

// READ a user by ID
router.get("/users/:id", getUserById);

// UPDATE user details
router.put("/users/:id", updateUser);

// DELETE a user
router.delete("/users/:id", deleteUser);

export default router;
