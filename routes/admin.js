const express = require("express");
const bcrypt = require("bcrypt");
const { Router } = require("express");
const { adminModel } = require("../db");
const { z, string } = require("zod");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "qweqwe";

const adminRouter = express.Router();

adminRouter.post("/signup", async function (req, res) {
  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    password: z.string().min(3).max(30),
    firstName: z.string().min(2).max(100),
    lastName: z.string().min(2).max(100),
  });

  const parsedData = requiredBody.safeParse(req.body);

  if (!parsedData.success) {
    res.status(400).json({
      message: "Incorrect format",
      error: parsedData.error,
    });
    return;
  }

  const { email, password, firstName, lastName } = parsedData.data;

  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    await adminModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
    res.json({
      message: "You are signed up",
    });
  } catch (e) {
    res.json({
      message: "User already exists",
    });
  }
});

adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  const admin = await adminModel.findOne({
    email: email,
  });

  if (!admin) {
    res.status(403).json({
      message: "User does not exist in database",
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, admin.password);
  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: admin._id.toString(),
      },
      JWT_ADMIN_PASSWORD
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});
adminRouter.post("/course", function (req, res) {
  res.json({
    message: "",
  });
});
adminRouter.put("/course", function (req, res) {
  res.json({
    message: "",
  });
});
adminRouter.get("/coursebulk", function (req, res) {
  res.json({
    message: "",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
