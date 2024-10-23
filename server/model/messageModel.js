const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new mongoose.Schema(
  {
    emergency: {
      type: String,
      enum: ["Fire Emergency", "Medical Assistance", "Natural Hazard", "Crime / Violence", "Biological Hazard", "Facility Failure"],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    img: {
      type: String,
     
    },
    message: {
      type: String,
      trim: true,
    },
    senderId: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
