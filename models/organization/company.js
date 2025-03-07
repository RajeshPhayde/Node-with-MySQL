import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

const Company = sequelize.define(
  "company",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "companies",
  }
);

export default Company;
