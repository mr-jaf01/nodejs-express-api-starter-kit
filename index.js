require("dotenv").config();
require("module-alias/register");
const express = require("express");

const authRoutes = require("@routes/authRoutes");
const authMiddleware = require("@middlewares/authentication");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to API Dashboard",
    version: "1.0.0",
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Express API starter pack",
    version: "1.0.0",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`);
});
