import { useState, useEffect } from "react";
import fetchUserDetails from "../functions/loaderfunctions/fetchUserDetails";

const useUserDetails = () => {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [bio, setBio] = useState("");
  const [userProfileImage, setUserProfileImage] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [userId, setUserId] = useState(null);

  const userNameInitial = userName && userName[0];
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userData = await fetchUserDetails();
        console.log(userData);
        setIsLoading(false);
        setUserName(userData.name);
        setBio(userData.bio);
        setUserProfileImage(userData.userProfileImage);
        setUserPosts(userData.posts);
        setUserId(userData.id);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    getUserDetails();
  }, []);
  return {
    userName,
    userNameInitial,
    bio,
    isLoading,
    userProfileImage,
    userPosts,
    userId,
  };
};

export default useUserDetails;
