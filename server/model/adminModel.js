const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new mongoose.Schema(
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
    phoneNumber: {
      type: String,
      required: [true, "Please add phone number"],
      unique: true,
    },
    messageReport: [{
      type: Schema.Types.ObjectId,
      ref: "Message",
    }],
    role: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Admin", adminSchema);
