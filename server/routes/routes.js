const express = require("express");
//for admin
const {
  registerController,
  loginControllers,
  getAdmin,
  deleteAdmin,
  updateAdmin,
} = require("../controller/adminController");

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
  getSpecificParent,
} = require("../controller/usersController");

//for messages
const {
  ReportMessage,
  getMessages,
  getSpecificMessage,
  updateMessage,
  deleteMessage,
} = require("../controller/messageController");

//for responder
const {
  registerResponder,
  getResponder,
  updateResponder,
  deleteResponder,
} = require("../controller/responderController");

const { verifyToken, sendingToken } = require("../controller/otpController");

//for image
const path = require("path");
const multer = require("multer");

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

//Routes for (user)
router.post("/user/register", registerUserController);
router.get("/user/getUser", getUser);
router.get("/user/account/specific/:id", getSpecificUser);
router.delete("/user/delete/:id", deleteUser);

//Routes for user (mobile)
router.post("/mobile/user/login", loginController);
router.post(
  "/mobile/user/upload/message",
  uploads.single("img"),
  ReportMessage
);

//Routes for update (user and parent)
router.put("/userUpdate/parentUpdate/:id", updateAccounts);

//Routes for (parents)
router.get("/user/parent/getParent", getParent);
router.get("/user/parent/specific/:id", getSpecificParent);
router.delete("/user/parent/delete/:id", deleteParent);

//sendingOTP
router.get("/request-otp/:id", sendingToken);
router.post("/verify/request-otp/", verifyToken);

//Routes for (admin)
router.post("/register", registerController);
router.get("/getAdmin", getAdmin);
router.get("/findAdmin/:id");
router.delete("/deleteAdmin/:id", deleteAdmin);
router.put("/updateAdmin/:id", updateAdmin);
router.post("/login", loginControllers);

//Routes for message  (web)
router.get("/user/messages", getMessages);
router.get("/user/message/specific/:id", getSpecificMessage);
router.put("/user/message/update/:id", updateMessage);
router.delete("/user/message/delete/:id", deleteMessage);

//reponder
router.post("/admin/responder/register", registerResponder);
router.get("/admin/responder/getResponder", getResponder);
router.put("/admin/responder/update/:id", updateResponder);
router.delete("/admin/responder/delete/:id", deleteResponder);

module.exports = router;
