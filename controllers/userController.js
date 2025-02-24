import User from "../models/userModel.js";

// CREATE a new user
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await User.create({ name, email, password });
    res.status(201).json({ id: newUser.id, name, email });
  } catch (err) {
    res.status(500).json({ error: "Error creating user: " + err.message });
  }
};

// READ all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: ["id", "name", "email"] });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Error fetching users: " + err.message });
  }
};

// READ a user by ID
export const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId, {
      attributes: ["id", "name", "email"],
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Error fetching user: " + err.message });
  }
};

// UPDATE user details
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.name = name || user.name;
    user.email = email || user.email;

    await user.save(); // Save the updated user
    res.status(200).json({ message: "User updated successfully", user });
  } catch (err) {
    res.status(500).json({ error: "Error updating user: " + err.message });
  }
};

// DELETE a user
export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.destroy(); // Delete the user from the database
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting user: " + err.message });
  }
};
