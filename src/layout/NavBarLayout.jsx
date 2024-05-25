import Navbar from "../Components/Navbar";
import UserNavbar from "../Components/UserNavbar";
import useAuthentication from "../hooks/useAuthentication";
const NavBarLayout = () => {
  const { isLoggedIn } = useAuthentication();

  return (
    <nav>
      {!isLoggedIn && <Navbar />}
      {isLoggedIn && <UserNavbar />}
    </nav>
  );
};

export default NavBarLayout;
