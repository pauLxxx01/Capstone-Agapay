import React, { useState } from "react";
import formatPhilippinePhoneNumber from "../../helper/phoneFormat";
import axios from "axios";

import "./user.scss";

const user = () => {
  //for user
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [department, setDepartment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  //for parent
  const [parentName, setParentName] = useState("");
  const [parentRelationship, setParentRelationship] = useState("");
  const [parentPhone, setParentPhone] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();

    if (!/^\d+$/.test(phoneNumber && parentPhone)) {
      alert("Please enter a valid phone number consisting of digits only.");
      return;
    }

    const formattedPhoneNumber = formatPhilippinePhoneNumber(phoneNumber);
    const formattedParentPhoneNumber = formatPhilippinePhoneNumber(parentPhone);
  
    axios
      .post("http://localhost:8080/admin/auth/user/register", {
        name,
        password,
        userId,
        department,
        phoneNumber: formattedPhoneNumber,
        parentName,
        parentRelationship,
        parentPhone: formattedParentPhoneNumber,
      })
      .then((res) => {
        console.log("Data registered: ", {
          name,
          password,
          userId,
          department,
          phoneNumber: formattedPhoneNumber,
          parentName,
          parentRelationship,
          parentPhone: formattedParentPhoneNumber,
        });
        setName("")
        setPassword("")
        setUserId("")
        setDepartment("")
        setPhoneNumber("")
        setParentName("")
        setParentRelationship("")
        setParentPhone("")
        alert("User registration successful!");
        console.log(res);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error response: ", error.response.data);
          alert(error.response.data.message);
          window.location.reload();
        } else {
          console.error("Error message:", error.message);
        }
      });
  };

  return (
    <div className="form-container-user">
      <form onSubmit={handleUpload} className="user-form">
        <div className="header-container">
          <h2>Registration</h2>
        </div>
        <div className="grid-container">
          <div className="user-info">
            <h3>User Information</h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="userId">User ID</label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value.toUpperCase())}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a department
                </option>
                <option value="CCMS">CCMS</option>
                <option value="CENG">CENG</option>
                <option value="CAFA">CAFA</option>
                <option value="CIHTM">CIHTM</option>
                <option value="ABM">ABM</option>
                <option value="CE">CE</option>
                <option value="CAS">CAS</option>
                <option value="CBA">CBA</option>
                <option value="CCJC">CCJC</option>
                <option value="CME">CME</option>
                <option value="CNAHS">CNAHS</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="parent-info">
            <h3>Parent Information</h3>
            <div className="form-group">
              <label htmlFor="parentName">Parent Name</label>
              <input
                type="text"
                id="parentName"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="parentPhone">Parent Phone Number</label>
              <input
                type="tel"
                id="parentPhone"
                value={parentPhone}
                onChange={(e) => setParentPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="parentRelationship">Relationship</label>
              <select
                id="parentRelationship"
                value={parentRelationship}
                onChange={(e) => setParentRelationship(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a relationship
                </option>
                <option value="Mother">MOTHER</option>
                <option value="Father">FATHER</option>
                <option value="Guardian">GUARDIAN</option>
              </select>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
export default user;
