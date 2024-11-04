import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import lock from "../../../assets/icons/login-icon/lock.svg";

import OTPDialog from "../../../components-screen/otp/dailog";

import {
  TextField,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { motion } from "framer-motion";
import { zoomIn } from "../../../variants";

import "./login.scss";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [adminID, setAdminID] = useState("");
  const [admin, setAdmin] = useState([]);

  //verify
  const [verify, setVerify] = useState(false);

  // dialog states
  const [dialogOpen, setDialogOpen] = useState(false);
  const [otpValue, setOtpValue] = useState(null);

  const navigate = useNavigate();

  const handleOpenDialog = (event) => {
 
    event.preventDefault(); // prevent default form submission
    axios
      .post("http://localhost:8080/admin/auth/login", { name, password })
      .then((response) => {
        console.log("Login Account:", { name, password });
        console.log("Admin Info: ",response.data.admin);
        console.log("Admin ID: ",response.data.admin._id);
        console.log("Verification: ",response.data.admin.isVerified )


        setVerify(response.data.admin.isVerified);

        setAdmin(response.data.admin);
        setAdminID(response.data.admin._id); // Set the verification token
        // Open dialog if login is successful
        if (!response.data.admin.isVerified) {
          setDialogOpen(true); // Open dialog if verified
        } else {
          navigate("/home/dashboard"); // Log if not verified
        }

      })
      .catch((error) => {
        setDialogOpen(false); // Close dialog if there's an error
        alert(`${error.response.data.message}`);
        console.log("Error:", error.response.data.message);
      });
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleConfirmOtp = (otp) => {
    setOtpValue(otp); // Handle confirmed OTP
    console.log("OTP confirmed:", otp);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      setName(storedUsername);
      setPassword(storedPassword);
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    if (checked) {
      localStorage.setItem("username", name);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
  }, [checked, name, password]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <motion.div
        variants={zoomIn(0.1)}
        initial="hidden"
        whileInView={"show"}
        className="body-content"
      >
        <form onSubmit={handleOpenDialog}>
          <div className="title-bar">
            <img className="lock-icon" src={lock} alt="lock-icon" />
            <h1 className="login-title">LOGIN</h1>
          </div>
          <div className="content-login">
            <div className="input">
              <TextField
                type="text"
                id="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Enter username"
                variant="outlined"
                size="small"
                required
                autoComplete="username"
              />
              <br />
              <TextField
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Enter password"
                variant="outlined"
                size="small"
                required
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="checkbox">
              <FormControlLabel
                control={
                  <Checkbox
                    id="remember-me"
                    name=""
                    checked={checked}
                    onChange={handleChange}
                  />
                }
                label="Remember me"
                labelPlacement="end"
              />
            </div>
  
            <div className="button">
              <button className="button-login" type="submit">
                <span>LOGIN</span>
              </button>
            </div>
          </div>
        </form>
        <OTPDialog
          open={dialogOpen}
          admin={admin}
          adminID={adminID.toString()}
          onClose={handleCloseDialog}
          onConfirm={handleConfirmOtp}
        />
        {otpValue && (
          <Typography variant="body1" style={{ marginTop: "20px" }}>
            OTP Entered: {otpValue}
          </Typography>
        )}
      </motion.div>
    </>
  );
};

export default Login;
