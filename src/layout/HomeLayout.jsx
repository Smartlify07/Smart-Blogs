import useAuthentication from "../hooks/useAuthentication";
import Home from "../routes/Home/Home";
import UserHome from "../routes/Home/UserHome";

const HomeLayout = () => {
  const { isLoggedIn } = useAuthentication();

  return (
    <>
      {!isLoggedIn && <Home />}
      {isLoggedIn && <UserHome />}
    </>
  );
};

export default HomeLayout;
