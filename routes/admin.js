const { Router } = require("express");
const adminRouter = Router();
const { adminmodel } = require("../db")

adminRouter.post("/signup", function (req, res) {
  res.json({
    message: "",
  });
});

adminRouter.post("/signin", function (req, res) {
  res.json({
    message: "",
  });
});
adminRouter.post("/", function (req, res) {
  res.json({
    message: "",
  });
});
adminRouter.put("/", function (req, res) {
  res.json({
    message: "",
  });
});
adminRouter.get("/bulk", function (req, res) {
  res.json({
    message: "",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
