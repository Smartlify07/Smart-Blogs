import { useState, useEffect } from "react";
import fetchUserDetails from "../functions/loaderfunctions/fetchUserDetails";

const useUserDetails = () => {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [bio, setBio] = useState("");
  const [userProfileImage, setUserProfileImage] = useState(null);

  const userNameInitial = userName && userName[0];
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userData = await fetchUserDetails();
        setIsLoading(false);
        setUserName(userData.name);
        setBio(userData.bio);
        setUserProfileImage(userData.userProfileImage);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    getUserDetails();
  }, []);
  return { userName, userNameInitial, bio, isLoading, userProfileImage };
};

export default useUserDetails;
