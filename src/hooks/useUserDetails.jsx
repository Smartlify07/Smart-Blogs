import { useState, useEffect } from "react";
import fetchUserDetails from "../functions/loaderfunctions/fetchUserDetails";

const useUserDetails = () => {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const userNameInitial = userName && userName[0];
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userData = await fetchUserDetails();
        setIsLoading(false);
        setUserName(userData.name);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    getUserDetails();
  }, []);
  return { userName, userNameInitial, isLoading };
};

export default useUserDetails;
