import sequelize from "../config/db.js";
import Organization from "./organization/organization.js";
import Company from "./organization/company.js";
import Branch from "./organization/branch.js";
import Department from "./organization/department.js";

import "./associations.js";

// Sync all models
const syncDatabase = async () => {
  try {
    await sequelize.sync(); // Sync all models
    console.log("✅ Database & tables synced successfully!");
  } catch (error) {
    console.error("❌ Error syncing database:", error);
    process.exit(1);
  }
};

// Sync all the table at once with database instead calling sequelize.sync() in all models.

export { sequelize, syncDatabase, Organization, Company, Branch, Department };

//! import all the tables (models) here as it will be created at the time of creating server.
