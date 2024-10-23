import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import formatPhilippinePhoneNumber from "../../helper/phoneFormat";

import {
  TextField,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { width } from "@mui/system";

const userAccounts = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  //for user
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [department, setDepartment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  //for parent
  const [parents, setParents] = useState([]);

  const [parentName, setParentName] = useState("");
  const [parentRelationship, setParentRelationship] = useState("");
  const [parentPhone, setParentPhone] = useState("");

  const navigate = useNavigate();
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/admin/auth/user/parent/getParent`)
      .then((response) => {
        setParents(response.data.parents);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      // Fetch the user to get the parent ID
      const userResponse = await axios.get(
        `http://localhost:8080/admin/auth/user/account/specific/${id}`
      );
      const parentId = userResponse.data.user.parent;
      // Use Promise.all to delete both user and parent in parallel
      await Promise.all([
        axios.delete(`http://localhost:8080/admin/auth/user/delete/${id}`),
        axios.delete(
          `http://localhost:8080/admin/auth/user/parent/delete/${parentId.toString()}`
        ),
      ]);
      window.location.reload();
      console.log("User and parent deleted successfully");
    } catch (error) {
      console.error("Error deleting user and parent:", error);
    }
  };

  const handleUpdate = async (id) => {
    const formattedPhoneNumber = formatPhilippinePhoneNumber(phoneNumber);
    const formattedParentPhoneNumber = formatPhilippinePhoneNumber(parentPhone);
    try {
      await axios.put(
        `http://localhost:8080/admin/auth/userUpdate/parentUpdate/${id}`,
        {
          name,
          password,
          userId,
          department,
          phoneNumber: formattedPhoneNumber,
          parentName,
          parentRelationship,
          parentPhone: formattedParentPhoneNumber,
        }
      );
      console.log("User and parent updated successfully");
      setModalOpen(false);
    } catch (error) {
      console.error("Error updating user and parent:", error);
    }
  };

  const openUpdateModal = (user, userParent) => {
    console.log(user._id);
    setSelectedUser(user._id);

    setName(user.name);
    setPassword(user.userId);
    setUserId(user.userId);
    setDepartment(user.department);
    setPhoneNumber(user.phoneNumber);

    setParentName(userParent.name);
    setParentRelationship(userParent.parentRelationship);
    setParentPhone(userParent.phone);

    setModalOpen(true);
  };

  const closeUpdateModal = () => {
    setModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="admin-accounts">
      <h2>User Accounts</h2>
      <button className="btn" onClick={() => navigate("/user/registration")}>
        Create Account
      </button>
      <div className="admin-list">
        {isModalOpen && (
          <div className="modal">
            <div className="form-container-user">
              <form
                className="user-form"
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent the default form submission
                  handleUpdate(selectedUser); // Call the update function
                }}
              >
                <div className="header-container">
                  <h2>Edit</h2>
                </div>
                <div className="grid-container">
                  <div className="user-info">
                    <h3>User Information</h3>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <TextField
                        className="input"
                        type="text"
                        id="name"
                        size="small"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <TextField
                        className="input"
                       
                        type={showPassword ? "text" : "password"}
                        id="password"
                        size="small"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleTogglePasswordVisibility}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="userId">User ID</label>
                      <TextField
                        className="input"
                        type="text"
                        id="userId"
                        size="small"
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
                      <TextField
                        className="input"
                        type="text"
                        id="phoneNumber"
                        size="small"
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
                      <TextField
                        className="input"
                        type="text"
                        id="parentName"
                        size="small"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="parentPhone">Parent Phone Number</label>
                      <TextField
                        className="input"
                        type="tel"
                        id="parentPhone"
                        size="small"
                        value={parentPhone}
                        onChange={(e) => setParentPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="parentRelationship">Relationship</label>
                      <select
                        id="parentRelationship"
                        size="small"
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
                  <button type="submit" className="update-btn">
                    Update
                  </button>
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={closeUpdateModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {users.length > 0 ? (
          users.map((user) => {
            const userParent = parents.find(
              (parent) => parent._id.toString() === user.parent.toString()
            );

            return (
              <div key={user._id} className="admin-card">
                <div className="admin-info">
                  <h3 className="admin-name">{user.name}</h3>
                  <p className="admin-phone">{user.userId}</p>
                  <p className="admin-phone">{user.department}</p>
                  <p className="admin-phone">{user.phoneNumber}</p>
                </div>
                <div className="parents-info">
                  {userParent ? (
                    <div key={userParent._id} className="admin-info">
                      <h3 className="admin-name">{userParent.name}</h3>
                      <p className="admin-phone">{userParent.relationship}</p>
                      <p className="admin-phone">{userParent.phone}</p>
                    </div>
                  ) : (
                    <p className="no-admins">No parents found.</p>
                  )}
                </div>
                <button
                  className="btn"
                  onClick={() => openUpdateModal(user, userParent)}
                >
                  Update
                </button>
                <button className="btn" onClick={() => handleDelete(user._id)}>
                  Delete
                </button>
              </div>
            );
          })
        ) : (
          <p className="no-admins">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default userAccounts;
