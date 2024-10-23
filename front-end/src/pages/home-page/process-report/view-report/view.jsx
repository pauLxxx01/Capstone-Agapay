import { useParams } from "react-router-dom";
import "./view.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Fire from "../../../../assets/emergencies/fire.png";
import Natural from "../../../../assets/emergencies/natural.png";
import Biological from "../../../../assets/emergencies/biological.png";
import Medical from "../../../../assets/emergencies/medical.png";
import Utility from "../../../../assets/emergencies/facilities.png";
import Crime from "../../../../assets/emergencies/crime.png";

const viewReports = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [parentId, setParentId] = useState("");
  const [parents, setParents] = useState([]);

  // const displayUser = ["full_name", "user_id", "contact_number", "department"];
  // const displayGuardian = [ "relationship", "name", "phone",];

  useEffect(() => {
    axios
      .get(`http://localhost:8080/admin/auth/getSpecificUser/${id}`)
      .then((response) => {
        const userData = response.data.user;
        if (userData.parent) {
          setParentId(userData.parent);
        }
        if (userData.img) {
          userData.img = `http://localhost:8080/images/${userData.img}`;
        }
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
          console.log("Parents Info: ", response);
          setParents(response.data.parents);
        })

        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("No parent ID found");
    }
  }, [parentId]); // add parentId as a dependency

  if (!users) {
    console.log("Report not found!");
    return <div>Report not found</div>;
  }

  return (
    <div className="view-container">
      <div className="header">
        <div className="icons">
          {users && users.alert ? (
            users.alert.toLowerCase() === "fire" ? (
              <img src={Fire} alt="" className="icon" />
            ) : users.alert.toLowerCase() === "natural" ? (
              <img src={Natural} alt="" className="icon" />
            ) : users.alert.toLowerCase() === "biological" ? (
              <img src={Biological} alt="" className="icon" />
            ) : users.alert.toLowerCase() === "medical" ? (
              <img src={Medical} alt="" className="icon" />
            ) : users.alert.toLowerCase() === "utility" ? (
              <img src={Utility} alt="" className="icon" />
            ) : users.alert.toLowerCase() === "crime" ? (
              <img src={Crime} alt="" className="icon" />
            ) : (
              <span>Emergency Icon</span>
            )
          ) : (
            <span>Emergency Icon</span>
          )}
        </div>
        <div className="titles">
          <span>Report Details</span>
          <span>{users.alert} Emergency</span>
        </div>
      </div>
      <hr></hr>

      <div className="content-table">
        <div className="user">
          <span>USER</span>
{/* 
          <ul>
            {displayUser.map((key, index) => (
              <li key={index}>
                <strong>{key.toUpperCase()}: </strong> {users[key]}
              </li>
            ))}
          </ul> */}
        </div>
        <hr></hr>
        <div className="guardian">
          <span>GUARDIAN</span>
          {/* <ul>
            {displayGuardian.map((key, index) => (
              <li key={index}>
                <strong>{key.toUpperCase()}: </strong> {parents[key]}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
      <hr />

      <div className="message">
        <div className="box box1">
          <span>Captured of incident</span>
          <img src={users.img} alt="imgOfIncident" />
        </div>
        <div className="box box2">
          <span>Text message</span>
          <p>{users.message}</p>
        </div>
        <div className="box box3">
          <span>Nearby</span>
        </div>
      </div>

      <div className="button">
        <Link
          className="next"
          to={`/home/report/ongoing/${users.id}/${users.RESPOND}/${users.NAME}`}
        >
          Accept
        </Link>
      </div>
    </div>
  );
};

export default viewReports;
