const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================
// BASIC ROUTE
// ===============================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Evermore Engine is running 🚀",
        version: "1.0.0"
    });
});

// ===============================
// HEALTH CHECK
// ===============================

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        status: "operational",
        service: "Evermore Backend",
        timestamp: new Date().toISOString()
    });
});

// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {
    console.log(`
========================================
       EVERMORE ENGINE 🚀
========================================

Server running on:
http://localhost:${PORT}

Health check:
http://localhost:${PORT}/api/health

Status: ONLINE
========================================
    `);
});