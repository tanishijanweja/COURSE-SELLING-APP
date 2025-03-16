const mongoose = require("mongoose");
// console.log("connected");
// mongoose.connect(
//   "mongodb+srv://tanishijanweja:1234567890@cluster0.6kuaq.mongodb.net/course-selling-app"
// );
const Schema = mongoose.Schema; // or write:-> const { Schema } = require("mongoose")
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});
const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});
const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  creatorId: ObjectId,
});
const purchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId,
});

const usermodel = mongoose.model("user", userSchema);
const adminmodel = mongoose.model("admin", adminSchema);
const coursemodel = mongoose.model("course", courseSchema);
const purchasemodel = mongoose.model("purchase", purchaseSchema);

module.exports = {
  usermodel,
  adminmodel,
  coursemodel,
  purchasemodel,
};
