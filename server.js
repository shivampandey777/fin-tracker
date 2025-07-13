const express = require("express");
const serverless = require("serverless-http");
const morgan = require("morgan");
const expenseRoutes = require("./routes/expenseRoutes");
const app = express();

// Load environment variables
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api", expenseRoutes);

// Export the handler for Vercel to use as the serverless function
module.exports.handler = serverless(app);
