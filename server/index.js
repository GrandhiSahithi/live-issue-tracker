const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

const issueRoutes = require("./routes/issues");
app.use("/api/issues", issueRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
  app.listen(5000, () => console.log("Server running on port 5000"));
}).catch((err) => console.error("MongoDB connection error:", err));
