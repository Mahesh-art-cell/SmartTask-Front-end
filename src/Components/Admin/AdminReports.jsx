import React from "react";
import ExportButton from "../Common/ExportButton";
// import "./AdminReport.css"
// import './AdminReport.css'


const AdminReports = () => {
  return (
    <div className="admin-reports">
      <h3>Export Reports</h3>
      <ExportButton type="csv" />
      <ExportButton type="excel" />
      <ExportButton type="pdf" />
    </div>
  );
};

export default AdminReports;
