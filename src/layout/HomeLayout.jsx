import useAuthentication from "../hooks/useAuthentication";
import Home from "../routes/Home/Home";

const HomeLayout = () => {
  const { isLoggedIn } = useAuthentication();

  console.log(isLoggedIn);

  return (
    <>
      {!isLoggedIn && <Home></Home>}
      {isLoggedIn && <p>Is Logged in home layout</p>}
    </>
  );
};

export default HomeLayout;
