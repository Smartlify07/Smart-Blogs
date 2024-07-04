import { useContext } from "react";
import { AuthContext } from "../Context/AuthenticationContext";

const useAuthentication = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  return { isLoggedIn, setIsLoggedIn };
};

export default useAuthentication;
