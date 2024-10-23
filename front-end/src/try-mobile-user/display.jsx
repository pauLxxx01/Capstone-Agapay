import React, { useState, useEffect } from "react";
import axios from "axios";

const CRUD = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserID] = useState("");
  const [department, setDepartment] = useState("");
  const [alert, setAlert] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [parentId, setParentId] = useState("");
  const [parent, setParent] = useState({}); // Add a state for parent

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/auth/getUser ")
      .then((response) => {
        const userData = response.data.users.map((user) => {
          if (user.parent) {
            setParentId(user.parent);
          }
          if (user.img) {
            user.img = `http://localhost:8080/images/${user.img}`;
          }
          return user;
        });
        setUsers(userData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (parentId) {
      axios
        .get(`http://localhost:8080/admin/auth/getUserParent/${parentId}`)
        .then((response) => {
          setParent(response.data.parents);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [parentId]);

  const handleDelete = async (id, parentId) => {
    if (parentId && id) {
      console.log("Delete both parent and user information");
      await Promise.all([
        axios.delete(`http://localhost:8080/admin/auth/deleteParent/${parentId}`),
        axios.delete(`http://localhost:8080/admin/auth/delete/${id}`)
      ]);
      setParent({}); // Reset parent state to an empty object
      setUsers(users.filter((user) => user._id !== id)); // Reset user state
    }
  };
  return (
    <div>
      <h2>CRUD Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <img src={user.img} alt={user.name} width="100" height="100" />
            <p>Name: {user.name}</p>
            <p>User ID: {user.userId}</p>
            <p>Alert: {user.alert}</p>
            <p>Department: {user.department}</p>
            {parent && (
              <div>
                <p>Parent Name: {parent.name}</p>
                <p>Parent ID: {parent.phone}</p>
              </div>
            )}
            <button onClick={() => handleDelete(user._id, user.parent)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUD;