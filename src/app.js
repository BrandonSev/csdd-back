require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { connection } = require("../db-connection");
const { User } = require("./models");

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("*", (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        req.user = null;
        next();
      } else {
        const [[user]] = await User.findOneById(decodedToken.id);
        req.user = user;
        return next();
      }
    });
  } else {
    req.user = null;
    next();
  }
});
app.use("/images", express.static("assets"));
app.use("/verifyToken", (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        req.user = null;
        next();
      } else {
        const [[user]] = await User.findOneById(decodedToken.id);
        req.user = user;
        return res.status(200).json({ id: user.id, user });
      }
    });
  } else {
    res.locals.user = null;
    return res.status(403).send();
  }
});
app.use("/api", mainRouter);

module.exports = app;
