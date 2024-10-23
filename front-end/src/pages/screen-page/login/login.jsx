import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import lock from "../../../assets/icons/login-icon/lock.svg";

import {
  TextField,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { motion } from "framer-motion";
import { zoomIn } from "../../../variants";

import "./login.scss";

const login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

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

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent default form submission
    axios
      .post("http://localhost:8080/admin/auth/login", { name, password })
      .then((response) => {
        console.log(response.data.admin._id);
        console.log("Login Account Success", { name, password });
        console.log(response);
        navigate("/home/dashboard");
      })
      .catch((error) => {
        alert(`${error.response.data.message}`);
        console.log(error);
      });
  };

  return (
    <>
      <motion.div
        variants={zoomIn(0.1)}
        initial="hidden"
        whileInView={"show"}
        className="body-content"
      >
        <form onSubmit={handleSubmit}>
          <div className="title-bar">
            <img className="lock-icon" src={lock} alt="lock-icon"></img>
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
      </motion.div>
    </>
  );
};

export default login;
