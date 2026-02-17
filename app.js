require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const messageRoutes = require("./routes/messageRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/messages", messageRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ IMPORTANT: Export app for Vercel
module.exports = app;
