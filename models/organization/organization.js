import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";
import Company from "./company.js"; // Import Company model for the association

const Organization = sequelize.define(
  "organization",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    organization_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "organizations",
  }
);

export default Organization;
