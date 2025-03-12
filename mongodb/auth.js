const jwt = require("jsonwebtoken");
const JWT_SECRET = "abcd@123";

function auth(req, res, next) {
  const token = req.headers.authorizaion;

  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
}

module.exports = {
  auth,
  JWT_SECRET,
};
