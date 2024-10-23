const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please add password"],
      min: 8,
    },
    userId: {
      type: String,
      required: [true, "Please add userId"],
      unique: true,
    },
    department: {
      type: String,
      required: [true, "Please add department"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please add phone number"],
    },
    respond: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    message: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
    parent: [
      {
        type: Schema.Types.ObjectId,
        ref: "Parent",
        required: true,
      },
    ],
    role: {
      type: String,
      default: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
