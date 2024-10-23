const express = require("express");
//for admin
const {
  registerController,
  loginControllers,
  getAdmin,
  deleteAdmin,
  updateAdmin,
} = require("../controller/adminController");

//reference for uploading img, soon to be removed...
const { uploadUser } = require("../controller/userInfoController");

//for image
const path = require("path");
const multer = require("multer");

//for users
const {
  registerUserController,
  getUser,
  deleteUser,
  deleteParent,
  getParent,
  getSpecificUser,
  updateAccounts,
  loginController,
} = require("../controller/usersController");

//for messages
const {ReportMessage} = require('../controller/messageController')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploads = multer({
  storage: storage,
});

//router objects
const router = express.Router();

//Routes for user info (reference for uploading img), soon to be removed...
router.post("/upload", uploads.single("file"), uploadUser);

//Routes for (user)
router.post("/user/register", registerUserController);
router.get("/user/getUser", getUser);
router.get("/user/account/specific/:id", getSpecificUser);
router.delete("/user/delete/:id", deleteUser);

//Routes for user (mobile)
router.post("/mobile/user/login", loginController);
router.post('/mobile/user/upload/message', uploads.single('img'), ReportMessage)

//Routes for (user and parents)
router.get("/user/parent/getParent", getParent);
router.delete("/user/parent/delete/:id", deleteParent);

//Routes for update (user and parent)
router.put("/userUpdate/parentUpdate/:id", updateAccounts);

//Routes for (admin)
router.post("/register", registerController);
router.get("/getAdmin", getAdmin);
router.delete("/deleteAdmin/:id", deleteAdmin);
router.put("/updateAdmin/:id", updateAdmin);

//Routes for login (admin)
router.post("/login", loginControllers);

module.exports = router;
