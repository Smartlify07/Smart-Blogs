import { useState, useEffect } from "react";
import fetchUserDetails from "../functions/loaderfunctions/fetchUserDetails";

const useUserDetails = () => {
  const [userInitial, setUserInitial] = useState("");
  useEffect(() => {
    const getUserDetails = async () => {
      const userData = await fetchUserDetails();
      setUserInitial(userData.name[0].toUpperCase()); // Get the first letter of the name
    };

    getUserDetails();
  }, []);
  return { userInitial };
};

export default useUserDetails;
