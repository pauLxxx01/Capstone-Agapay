const userModel = require("../model/userModel");
const adminModel = require("../model/adminModel");
const messageModel = require("../model/messageModel");

const ReportMessage = async (req, res) => {
  try {
    const { emergency, location, message, senderId,} = req.body;
    console.log('Incoming request:', req.body, req.file);


    console.log(emergency, location, message, senderId);
    if (!req.file) {
      console.error('No file uploaded.');
      return res.status(400).send('No file uploaded.');
    }
    if (!emergency) {
      console.log("ERROR ", emergency);
      return res
        .status(400)
        .send({ success: false, message: "Emergency type is required" });
    }

    if (!location) {
      console.log("ERROR ", location);
      return res
        .status(400)
        .send({ success: false, message: "Location is required" });
    }

    if (!message) {
      console.log("ERROR ", message);
      return res
        .status(400)
        .send({ success: false, message: "Message is required" });
    }

    const messages = await userModel.findById(senderId); // Corrected this line
    if (!messages) {
      return res.status(404).send({
        success: false,
        message: "User  not found",
      });
    }
    console.log("hello");

    const newMessage = new messageModel({
      emergency,
      location,
      img: req.file ? req.file.filename : null, // Check if req.file exists
      message,
      senderId,
    });

    await newMessage.save();

    return res.status(201).send({
      success: true,
      message: "Message reported successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { ReportMessage };
