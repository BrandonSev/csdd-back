require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes");

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));
app.use("/images", express.static("assets"));
app.use("/api", mainRouter);

module.exports = app;
