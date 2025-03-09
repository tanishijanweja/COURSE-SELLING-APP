// Write a function that takes in a username and password and returns a JWT token with the username encoded inside an object. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
// Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
// - Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED.
// Return false otherewise

const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJWT(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }
  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword
  );
  return signature;
}

function verifyJWT(token) {
  try {
    jwt.verify(token, jwtPassword);
    return true;
  } catch (e) {}
  return false;
}

function decodeJWT(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}

const ans = signJWT("atnishiii@gmail.com", "12113ty");
console.log(ans);

const ans1 = decodeJWT(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImF0bmlzaGlpaUBnbWFpbC5jb20iLCJpYXQiOjE3NDE1MDUyOTR9.EhLHfNuy6wYuOgzjkjX2M3yzjRbWC6BGxYJtaNBVAHI"
);
console.log(ans1);

const ans2 = verifyJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImF0bmlzaGlpaUBnbWFpbC5jb20iLCJpYXQiOjE3NDE1MDU4MTl9.3jduaRNlBgw7qv34IB5o_5MCmjDiOfFltPjk7qZJuCo");
console.log(ans2);
