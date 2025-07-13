// server.js
const express = require("express");
const serverless = require("serverless-http");
const morgan = require("morgan");
const expenseRoutes = require("./routes/expenseRoutes");
const app = express();

require("dotenv").config({ debug: true });

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api", expenseRoutes);

// Wrap the express app with serverless-http for Vercel
module.exports.handler = serverless(app);
