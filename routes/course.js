const express = require("express");
const Router = express.Router;

const courseRouter = express.Router();

courseRouter.post("/purchase", function (req, res) {
  res.json({
    message: "",
  });
});

courseRouter.get("/preview", function (req, res) {
  res.json({
    message: "",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
