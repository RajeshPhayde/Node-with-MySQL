import Organization from "./organization/organization.js";
import Company from "./organization/company.js";
import Branch from "./organization/branch.js";
import Department from "./organization/department.js";

// Set up the associations
Organization.hasMany(Company, {
  foreignKey: "organization_id", // The foreign key in the Company table
  onDelete: "CASCADE",
});

Company.belongsTo(Organization, {
  foreignKey: "organization_id", // The foreign key in the Company table
  onDelete: "CASCADE",
});

Company.hasMany(Branch, {
  foreignKey: "company_id", // The foreign key in the Company table
  onDelete: "CASCADE",
});

Branch.belongsTo(Company, {
  foreignKey: "company_id", // The foreign key in the Company table
  onDelete: "CASCADE",
});

// Many-to-many relationship between Branch and Department
Branch.belongsToMany(Department, {
  through: "BranchDepartment", // Join table for the relationship
  foreignKey: "branch_id", // Foreign key in the join table
  otherKey: "department_id", // Foreign key in the join table
  onDelete: "CASCADE", // Optional: define what happens when a Branch is deleted
});

// Many-to-many relationship between Department and Branch
Department.belongsToMany(Branch, {
  through: "BranchDepartment", // Join table for the relationship
  foreignKey: "department_id", // Foreign key in the join table
  otherKey: "branch_id", // Foreign key in the join table
  onDelete: "CASCADE", // Optional: define what happens when a Department is deleted
});
