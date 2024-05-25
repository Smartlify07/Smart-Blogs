import { Outlet } from "react-router-dom";
import FooterLayout from "./FooterLayout";
import NavBarLayout from "./NavBarLayout";

const RootLayout = () => {
  return (
    <>
      <NavBarLayout />
      <Outlet />
      <FooterLayout />
    </>
  );
};

export default RootLayout;
