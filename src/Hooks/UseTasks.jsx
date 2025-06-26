import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

const useTasks = () => {
  return useContext(TaskContext);
};

export default useTasks;
