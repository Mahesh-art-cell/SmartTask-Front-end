
import { useState } from 'react';
import exportService from '../services/exportService';

const useExport = () => {
  const [isExporting, setIsExporting] = useState(false);

  const exportTasks = async (tasks) => {
    try {
      setIsExporting(true);
      await exportService.exportToCSV(tasks);
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return { isExporting, exportTasks };
};

export default useExport;