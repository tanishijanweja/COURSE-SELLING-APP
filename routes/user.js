const bcrypt = require("bcrypt");
const { Router } = require("express");
const { userModel, purchaseModel, courseModel } = require("../db");
const { z, string } = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
const userRouter = Router();
const { userMiddleware } = require("../middleware/user");

userRouter.post("/signup", async function (req, res) {
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
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    await userModel.create({
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

userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email: email,
  });

  if (!user) {
    res.status(403).json({
      message: "User does not exist in database",
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_USER_PASSWORD
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

userRouter.get("/purchases", userMiddleware, async function (req, res) {
  const userId = req.userId;

  const purchases = await purchaseModel.find({
    userId,
  });
  let purchasedCourseId = [];

  for (let i = 0; i < purchases.length; i++) {
    purchasedCourseId.push(purchases[i].courseId);
  }
  const courseData = await courseModel.find({
    _id: { $in: purchasedCourseId },
  });

  res.json({
    purchases,
  });
});

module.exports = {
  userRouter: userRouter,
};
