import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
