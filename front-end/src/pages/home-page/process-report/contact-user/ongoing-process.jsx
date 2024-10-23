import { useParams} from "react-router-dom";
import "./ongoing.scss";


import { ReportData, headerTableReport } from "../../../newData";

const ongoing = () => {
    const { id, RESPOND, NAME } = useParams();

    const reportData = ReportData.find((item) => item.id === parseInt(id) && item.RESPOND === RESPOND && item.NAME === NAME);
  
    if (!reportData) {
      return <div>Report not found</div>;
    }
  
    return (
        <div>
         
          <h1>Report {id}, {RESPOND},  {NAME}</h1>

          <p>{reportData.description}</p>
          <thead className="headerTable">
          <tr>
            {headerTableReport.map((header, index) => (
              <th key={index}>{header.Label}</th>
            ))}
          </tr>
        </thead>
        </div>
      );
    };
    
    export default ongoing;