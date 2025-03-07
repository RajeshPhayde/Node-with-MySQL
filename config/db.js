import mysql from "mysql2/promise";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

const initializeDatabase = async () => {
  try {
    // Create database if it doesn't exist
    const connection = await mysql.createConnection({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
    });

    // Create database if it doesn't exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
    await connection.end(); // Close connection after database creation

    // Connect Sequelize to the database
    const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      dialect: "mysql",
      logging: false, // Suppress SQL logs
    });

    console.log("✅ Database connected successfully!");
    return sequelize; // Return Sequelize instance
  } catch (error) {
    console.error("❌ Database initialization error:", error);
    process.exit(1); // Stop process on failure
  }
};

// Export the initialized Sequelize instance
const sequelize = await initializeDatabase();
export default sequelize;

/* 
  use sequelizePromise instead of directly exporting a sequelize instance is because 
  the database connection is asynchronous
*/
