const express = require("express");
const Router = express.Router; //or use this:-> const { Router } = require("express")

const userRouter = express.Router();

userRouter.post("/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

userRouter.post("/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "",
  });
});

module.exports = {
  userRouter: userRouter,
};
