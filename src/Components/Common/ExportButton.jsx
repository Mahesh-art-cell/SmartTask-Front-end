import React from "react";
import { exportTasks } from "../../Services/ExportService";
import "./ExportButton.css"
const ExportButton = ({ type = "csv" }) => {
  const handleExport = async () => {
    await exportTasks(type);
  };

  return (
    <button onClick={handleExport}>
      Export {type.toUpperCase()}
    </button>
  );
};

export default ExportButton;
