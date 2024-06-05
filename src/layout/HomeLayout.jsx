import useAuthentication from "../hooks/useAuthentication";
import Home from "../routes/Home/Home";
import UserHome from "../routes/Home/UserHome";
import { useLoaderData } from "react-router-dom";

const HomeLayout = () => {
  const { isLoggedIn } = useAuthentication();
  const blogPosts = useLoaderData();
  console.log(blogPosts);
  console.log(isLoggedIn);

  return (
    <>
      {!isLoggedIn && <Home />}
      {isLoggedIn && <UserHome />}
    </>
  );
};

export default HomeLayout;
