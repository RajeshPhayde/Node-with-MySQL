import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import bcrypt from "bcryptjs";

// Define the User model
const User = sequelize.define("User", {
  // Define attributes (columns)
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Hash password before saving to the database
User.beforeCreate((user) => {
  return bcrypt.hash(user.password, 10).then((hashedPassword) => {
    user.password = hashedPassword;
  });
});

// Sync the model with the database (create the table if it doesn't exist)
User.sync()
  .then(() =>
    console.log("User table has been created (if it didn't exist already).")
  )
  .catch((err) => console.log("Error creating User table: ", err));

export default User;
