const userModel = require("../model/userModel");
const parentModel = require("../model/parentModel");
const { hashPassword } = require("../helpers/authHelper");

const uploadUser  = async (req, res) => {
  try {
    console.log(userModel, parentModel);
    const {
      name,
      password,
      userId,
      department,
      alert,
      respond,
      message,
      parentName,
      parentPhone,
      parentRelationship,
      phoneNumber,
    } = req.body;

    // Validate required fields
    const requiredFields = [
      // for parent
      "parentName",
      "parentPhone",
      "parentRelationship",
      // for user
      "name",
      "password",
      "userId",
      "department",
      "phoneNumber",
    ];

    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length > 0) {
      return res.status(400).send({
        success: false,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    // Validate password length
    if (password.length < 8) {
      return res.status(400).send({
        success: false,
        message: "User  password should be at least 8 characters long!",
      });
    }

    // Check for existing user
    const existingUser  = await userModel.findOne({ userId });
    if (existingUser ) {
      return res.status(400).send({
        success: false,
        message: "User  ID already exists!",
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const newUser  = new userModel({
      name,
      password: hashedPassword,
      userId,
      department,
      alert,
      respond,
      img: req.file.filename,
      message,
      phoneNumber,
    });

    const savedUser  = await newUser .save();

    // Create new parent
    const newParent = new parentModel({
      name: parentName,
      phone: parentPhone,
      relationship: parentRelationship,
      children: savedUser ._id,
    });
    const savedParent = await newParent.save();

    // Update the parent field of the savedUser 
    savedUser .parent = savedParent._id;
    await savedUser .save();

    console.log(`User  saved successfully ${name} ${userId}`);
    return res.status(201).send({
      success: true,
      message: "User  saved successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = { uploadUser };
