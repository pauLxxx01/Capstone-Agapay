import axios from "axios";
import { useState } from "react";

const image = () => {
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserID] = useState("");
  const [department, setDepartment] = useState("");
  const [alert, setAlert] = useState("");
  const [message, setMessage] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentRelationship, setParentRelationship] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Add phoneNumber state variable

  const handleUpload = (e) => {
    e.preventDefault();
    console.log(file);

    // const formdata = new FormData();
    // formdata.append("name", name);
    // formdata.append("password", password);
    // formdata.append("userId", userId);
    // formdata.append("department", department);
    // formdata.append("alert", alert);
    // formdata.append("file", file);
    // formdata.append("message", message);
    // formdata.append("parentName", parentName);
    // formdata.append("parentPhone", parentPhone);
    // formdata.append("parentRelationship", parentRelationship);
    // formdata.append("phoneNumber", phoneNumber); // Add phoneNumber to formdata

    // axios
    //   .post("http://localhost:8080/admin/auth/upload", formdata)
    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <h2>Insert User</h2>
        <form onSubmit={handleUpload}>
          <label>
            Name:
            <input
              autoComplete="name"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter username"
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <label>
            User ID:
            <input
              type="text"
              name="userId"
              onChange={(e) => setUserID(e.target.value)}
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <br />
          <label>
            Emergency:
            <input
              type="radio"
              name="alert"
              value="Fire"
              onChange={(e) => setAlert(e.target.value)}
            />{" "}
            Fire
            <input
              type="radio"
              name="alert"
              value="Medical"
              onChange={(e) => setAlert(e.target.value)}
            />{" "}
            Medical
            <input
              type="radio"
              name="alert"
              value="Hazard"
              onChange={(e) => setAlert(e.target.value)}
            />{" "}
            Hazard
          </label>
          <br />
          <label>
            Department:
            <input
              type="radio"
              name="department"
              value="IT"
              onChange={(e) => setDepartment(e.target.value)}
            />{" "}
            IT
            <input
              type="radio"
              name="department"
              value="CENG"
              onChange={(e) => setDepartment(e.target.value)}
            />{" "}
            HR
            <input
              type="radio"
              name="department"
              value="ABM"
              onChange={(e) => setDepartment(e.target.value)}
            />{" "}
            Finance
          </label>
          <br />
          <label>
            Image:
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </label>
          <br />
          <label>
            Message:
            <textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <br />
          <label>
            Parent Name:
            <input
              type="text"
              name="parentName"
              onChange={(e) => setParentName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Parent Phone:
            <input
              type="text "
              name="parentPhone"
              onChange={(e) => setParentPhone(e.target.value)}
            />
          </label>
          <br />
          <label>
            Parent Relationship:
            <input
              type="text"
              name="parentRelationship"
              onChange={(e) => setParentRelationship(e.target.value)}
            />
          </label>
          <br />

          <button type="submit">Upload</button>
        </form>
      </div>
    </>
  );
};

export default image;
