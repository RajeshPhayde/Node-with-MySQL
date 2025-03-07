import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

const Department = sequelize.define(
  "department",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "departments",
  }
);

export default Department;
