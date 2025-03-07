import express from "express";
import dotenv from "dotenv";
import { syncDatabase } from "./models/index.js"; // to connect and create the tables
import registerRoutes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 7600; // Fallback to 7600 if not specified

// Register the routes first
registerRoutes(app);

// Register error-handling middleware last
app.use(errorHandler);

if (process.env.NODE_ENV === "dev") {
  console.log("App is running in development mode");
} else if (process.env.NODE_ENV === "prod") {
  console.log("App is running in production mode");
} else {
  console.log("App is running in an unknown environment");
}

// Define an async function to initialize the database and start the server
const startServer = async () => {
  try {
    await syncDatabase(); // Ensure DB & tables are created
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    // Catch any errors during the database initialization process
    console.error("Database initialization failed:", err);
    process.exit(1); // Exit the process if DB initialization fails
  }
};

// Call the function to start the server
await startServer();
