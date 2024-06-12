import { useLoaderData } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";
import Home from "../routes/Home/Home";
import UserHome from "../routes/Home/UserHome";
import { useOutletContext } from "react-router-dom";

const HomeLayout = () => {
  const { isLoggedIn } = useAuthentication();
  const { blogs } = useLoaderData();
  const context = useOutletContext();
  console.log(context);
  return (
    <>
      {!isLoggedIn && <Home />}
      {isLoggedIn && <UserHome blogs={blogs} />}
    </>
  );
};

export default HomeLayout;
