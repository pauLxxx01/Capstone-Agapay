const { hashPassword, comparePassword } = require("../helpers/authHelper");
const parentModel = require("../model/parentModel");
const userModel = require("../model/userModel");
const JWT = require("jsonwebtoken");

const updateAccounts = async (req, res) => {
  try {
    const {
      name,
      password,
      userId,
      department,
      phoneNumber,
      parentName,
      parentPhone,
      parentRelationship,
    } = req.body;

    const id = req.params.id; // Get the user ID from the request parameters

    if (password && password.length < 8) {
      return res.status(400).send({
        success: false,
        message: "User  password should be at least 8 characters long!",
      });
    }

    const existingUser = await userModel.findOne({ userId, _id: { $ne: id } });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User  ID already exists",
      });
    }

    // Prepare the update object
    const updateData = {
      name,
      userId,
      department,
      phoneNumber,
    };

    if (password) {
      // Hash password only if it's provided
      updateData.password = await hashPassword(password);
    }

    // Updating user
    const updatedUser = await userModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).send({
        success: false,
        message: "User  not found",
      });
    }

    // Updating parent
    const parentUpdateData = {
      name: parentName,
      phone: parentPhone,
      relationship: parentRelationship,
      children: updatedUser._id,
    };

    const updatedParent = await parentModel.findOneAndUpdate(
      { _id: updatedUser.parent }, // Assuming you have a reference to the parent in the user model
      parentUpdateData,
      { new: true }
    );

    // If the parent does not exist, you can create a new parent
    if (!updatedParent) {
      const newParent = new parentModel(parentUpdateData);
      await newParent.save();
      updatedUser.parent = newParent._id; // Link user to the new parent
      await updatedUser.save();
    }

    console.log(`User  updated: ${updatedUser.name && updatedUser._id}`);
    return res.status(200).send({
      success: true,
      message: "User  updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error updating user and parent",
      error: error,
    });
  }
};

const registerUserController = async (req, res) => {
  try {
    const {
      //for user
      name,
      password,
      userId,
      department,
      phoneNumber,
      // for parent
      parentName,
      parentPhone,
      parentRelationship,
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

    if (password.length < 8) {
      return res.status(400).send({
        success: false,
        message: "User password should be at least 8 characters long!",
      });
    }

    const existingUser = await userModel.findOne({ userId });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User ID already exists",
      });
    }

    //hashing password
    const hashedPassword = await hashPassword(password);

    // creating new user
    const newUser = new userModel({
      name,
      password: hashedPassword,
      userId,
      department,
      phoneNumber,
    });

    //saving user
    const savedUser = await newUser.save();

    // creating new parent
    const newParent = new parentModel({
      name: parentName,
      phone: parentPhone,
      relationship: parentRelationship,
      children: savedUser._id,
    });

    // saving parent
    const savedParent = await newParent.save();

    // linking user to parent
    savedUser.parent = savedParent._id;
    await savedUser.save();

    console.log(`User saved: ${savedUser.name && savedUser._id}`);
    return res.status(201).send({
      success: true,
      message: "User registered successfully",
      user: savedUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).send({
      success: true,
      message: "Users retrieved successfully",
      users: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
};

const getSpecificUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await userModel.findOne({ _id: id });

    if (!userExist) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    const findUsers = await userModel.findById(id);
    res.status(200).send({
      success: true,
      message: "User retrieved successfully",
      user: findUsers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error retrieving user",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await userModel.findOne({ _id: id });

    if (!userExist) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    const deletedUser = await userModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "User deleted successfully",
    });
    console.log(`User deleted: ${deletedUser.name}`);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
};

const getParent = async (req, res) => {
  try {
    const parent = await parentModel.find();
    res.status(200).send({
      success: true,
      message: "Users retrieved successfully",
      parents: parent,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
};

const deleteParent = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await parentModel.findOne({ _id: id });

    if (!userExist) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    const deletedUser = await parentModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Parent deleted successfully",
      user: deletedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error deleting Parent",
    });
  }
};

// LOGIN USER (MOBILE)
const loginController = async (req, res) => {
  try {
    const { userId, password } = req.body;

    if (!userId || !password) {
      return res.status(500).send({
        success: false,
        message: "Please provide both student number and password",
      });
    }

    const user = await userModel.findOne({ userId });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Check if the password matches
    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Incorrect password",
      });
    }

    //Token JWT
    const token = await JWT.sign(
      { userId: user.userId },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h", // 1 hour token expiry
      }
    );
    res.status(200).send({
      success: true,
      message: "User logged in successfully",
      token,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
};

module.exports = {
  //for user and parent
  registerUserController,
  updateAccounts,

  //for user
  getUser,
  deleteUser,

  //mobile
  loginController,

  //for parent
  deleteParent,
  getParent,

  //specific for user._id
  getSpecificUser,
};
