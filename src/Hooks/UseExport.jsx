import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const useExport = () => {
  const getToken = () => localStorage.getItem("token");

  const downloadFile = async (type) => {
    try {
      const res = await axios.get(`${API_URL}/export/${type}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        },
        responseType: "blob",
      });

      const blob = new Blob([res.data]);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `tasks.${type}`);
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error("Download error:", err);
    }
  };

  return { downloadFile };
};

export default useExport;
