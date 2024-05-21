import FooterLayout from "./FooterLayout";
import HomeLayout from "./HomeLayout";
import NavBarLayout from "./NavBarLayout";

const RootLayout = () => {
  return (
    <>
      <NavBarLayout />
      <HomeLayout />
      <FooterLayout />
    </>
  );
};

export default RootLayout;
