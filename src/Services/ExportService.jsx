
import api from "./api";

export const exportCSV = async () => {
  const res = await api.get("/export/csv", { responseType: "blob" });
  return res.data;
};

export const exportExcel = async () => {
  const res = await api.get("/export/excel", { responseType: "blob" });
  return res.data;
};

export const exportPDF = async () => {
  const res = await api.get("/export/pdf", { responseType: "blob" });
  return res.data;
};

// ✅ Add this wrapper function
export const exportTasks = async (type) => {
  if (type === "csv") return await exportCSV();
  if (type === "excel") return await exportExcel();
  if (type === "pdf") return await exportPDF();
  throw new Error("Invalid export type");
};
