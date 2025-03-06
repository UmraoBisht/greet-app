import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors()); // Enable CORS for frontend-backend communication
app.use(express.json()); // Enable JSON parsing in requests

/**
 * GET /api/greet
 * Returns a greeting message if a name is provided, otherwise returns an error.
 * @param {string} req.query.name - The name of the user.
 * @returns {object} JSON response with a greeting message or an error.
 */

import greetRouter from "./routes/greet.route.js";
app.use("/api/greet", greetRouter);

// Start the server and listen on the defined PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
