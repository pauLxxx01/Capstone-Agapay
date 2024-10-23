import React, { useState } from "react";
import "./modal.scss";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../../../../variants";
import { headerTable } from "../../../../../newData";
import { Link } from "react-router-dom";

function Modal({ setOpenModal, title, data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const filteredData = data.filter((item) => {
    return (
      item.user_id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.alert.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.respond.toString().includes(searchTerm.toLowerCase()) ||
      item.createdAt.toString().includes(searchTerm)
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const prePage = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <motion.div
      className="main-modal"
      variants={fadeIn("down", 0.1)}
      initial="hidden"
      whileInView={"show"}
    >
      <motion.div
        variants={zoomIn(0.02)}
        initial="hidden"
        whileInView={"show"}
        className="popup"
      >
        <div className="containerModal">
          <div className="button-container">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <motion.div className="popup-header">
            <span>{data.length}</span>
            <span>{title}</span>
          </motion.div>
          <div className="search">
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search..."
            />
          </div>
          <div className="container-body">
            <table>
              <thead className="headerTableModal">
                <tr>
                  {headerTable.map((header, index) => (
                    <th key={index}>{header.Label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData
                  .slice(
                    (currentPage - 1) * itemsPerPage,
                    currentPage * itemsPerPage
                  )
                  .map((row) => (
                    <tr key={row._id}>
                      <td title={row.full_name} key={row.full_name}>
                        {row.full_name}
                      </td>
                      <td title={row.user_id} key={row.user_id}>
                        {row.user_id}
                      </td>

                      <td title={row.department} key={row.department}>
                        {row.department}
                      </td>
                      <td title={row.alert} key={row.alert}>
                        {row.alert}
                      </td>
                      <td title={row.createdAt} key={row.createdAt}>
                        {row.createdAt}
                      </td>
                      <td
                        className="respond"
                        title={row.respond}
                        key={row.respond}
                      >
                        <div
                          className={`data-modal ${
                            row.respond === "No" ? "no" : "yes"
                          }`}
                        >
                          <p>{row.respond}</p>
                        </div>
                      </td>

                      <td>
                        <div className="view">
                          <Link
                            className="showView"
                            to={`/home/report/${row._id}`}
                          >
                            View
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {currentPage >= 2 && (
            <div className="containerNav">
              <nav>
                <ul className="pagination-modal">
                  {currentPage > 1 && (
                    <li className="page-item">
                      <a
                        href="#"
                        className="page-link"
                        onClick={(e) => {
                          e.preventDefault();
                          prePage(e);
                        }}
                      >
                        Previous
                      </a>
                    </li>
                  )}

                  {Array(totalPages)
                    .fill(0)
                    .map((_, i) => (
                      <li
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`page-item ${
                          currentPage === i + 1 ? "active" : ""
                        }`}
                      >
                        <a className="page-link">{i + 1}</a>
                      </li>
                    ))}

                  {currentPage < totalPages && (
                    <li className="page-item">
                      <a
                        href="#"
                        className="page-link"
                        onClick={(e) => {
                          e.preventDefault();
                          nextPage(e);
                        }}
                      >
                        Next
                      </a>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
