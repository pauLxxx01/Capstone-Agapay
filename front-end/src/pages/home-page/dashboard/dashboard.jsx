import "./dashboard.scss";
import Chart from "../../../components/linechart/chart.jsx";
import BarChart from "../../../components/barChart/chart.jsx";
import { useEffect, useState } from "react";
import { ReportData } from "../../../../newData.js";
import Modal from "./modal/Modal.jsx";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../../../variants";
import axios from "axios";

const dashboard = ({ users }) => {
  const getNoRespondData = (alertType) => {
    return users.filter(
      (item) => item.alert === alertType && item.respond.toLowerCase() === "no"
    );
  };

  const fireNoRespondData = getNoRespondData("Fire");
  const naturalNoRespondData = getNoRespondData("Natural");
  const biologicalNoRespondData = getNoRespondData("Biological");
  const medicalNoRespondData = getNoRespondData("Medical");
  const utilityNoRespondData = getNoRespondData("Utility");
  const crimeNoRespondData = getNoRespondData("Crime");

  const [modalOpen, setModalOpen] = useState({
    fire: false,
    natural: false,
    biological: false,
    medical: false,
    utility: false,
    crime: false,
  });
  const isAnyModalOpen = Object.values(modalOpen).some((isOpen) => isOpen);

  useEffect(() => {
    if (isAnyModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isAnyModalOpen]);

  const handleModalOpen = (type) => {
    setModalOpen((prevModalOpen) => ({ ...prevModalOpen, [type]: true }));
  };

  const handleModalClose = (type) => {
    setModalOpen((prevModalOpen) => ({ ...prevModalOpen, [type]: false }));
  };

  return (
    <>
      <div
        className={`dashboard-container ${
          isAnyModalOpen ? "overflow-hidden" : ""
        }`}
      >
        {modalOpen.fire && (
          <Modal
            setOpenModal={() => handleModalClose("fire")}
            title="Fire Emergency"
            data={fireNoRespondData}
          />
        )}
        {modalOpen.natural && (
          <Modal
            setOpenModal={() => handleModalClose("natural")}
            title="Natural Hazard"
            data={naturalNoRespondData}
          />
        )}
        {modalOpen.biological && (
          <Modal
            setOpenModal={() => handleModalClose("biological")}
            title="Biological Hazard"
            data={biologicalNoRespondData}
          />
        )}
        {modalOpen.medical && (
          <Modal
            setOpenModal={() => handleModalClose("medical")}
            title="Medical Assistance"
            data={medicalNoRespondData}
          />
        )}
        {modalOpen.utility && (
          <Modal
            setOpenModal={() => handleModalClose("utility")}
            title="Utility failure"
            data={utilityNoRespondData}
          />
        )}
        {modalOpen.crime && (
          <Modal
            setOpenModal={() => handleModalClose("crime")}
            title="Crime and Violence"
            data={crimeNoRespondData}
          />
        )}
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className="title"
        >
          <h1>DASHBOARD</h1>
        </motion.div>

        <motion.div
          variants={zoomIn(0.1)}
          initial="hidden"
          whileInView={"show"}
          className="dashboard"
        >
          <motion.div
            className="box box1"
            onClick={() => handleModalOpen("fire")}
          >
            <span className="emergency count">{fireNoRespondData.length}</span>
            <span className="emergency">Fire Emergency</span>
          </motion.div>

          <motion.div
            className="box box2"
            onClick={() => handleModalOpen("natural")}
          >
            <span className="emergency count">
              {naturalNoRespondData.length}
            </span>
            <span className="emergency">Natural Hazard</span>
          </motion.div>

          <motion.div
            className="box box3"
            onClick={() => handleModalOpen("biological")}
          >
            <span className="emergency count">
              {biologicalNoRespondData.length}
            </span>
            <span className="emergency">Biological Hazard</span>
          </motion.div>

          <motion.div
            className="box box4"
            onClick={() => handleModalOpen("medical")}
          >
            <span className="emergency count">
              {medicalNoRespondData.length}
            </span>
            <span className="emergency">Medical Assistance</span>
          </motion.div>

          <motion.div
            className="box box5"
            onClick={() => handleModalOpen("utility")}
          >
            <span className="emergency count">
              {utilityNoRespondData.length}
            </span>
            <span className="emergency">Utility failure</span>
          </motion.div>

          <motion.div
            className="box box6"
            onClick={() => handleModalOpen("crime")}
          >
            <span className="emergency count">{crimeNoRespondData.length}</span>
            <span className="emergency">Crime and Violence</span>
          </motion.div>

          {/* <motion.div className="box box7">
          <h1>Daily report</h1>
          <BarChart />
        </motion.div>  */}

          {/* <motion.div className="box box8">
          <h1>Weekly report</h1>
          <Chart />
        </motion.div> */}
        </motion.div>
      </div>
    </>
  );
};

export default dashboard;
