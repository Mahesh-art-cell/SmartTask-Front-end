import { useContext } from "react";
import { useAuthContext } from "../Context/AuthContext";

export const useAuth = () => {
  return useContext(useAuthContext);
};


