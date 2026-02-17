
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/messages", messageRoutes);

// Test route
app.get("/", (req, res) => res.send("Welcome"));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
