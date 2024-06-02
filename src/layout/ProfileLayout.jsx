import { Outlet } from "react-router-dom";
import Profile from "../routes/Profile/Profile";
const ProfileLayout = () => {
  return (
    <section className="py-10 flex font-rubik flex-col items-center">
      <Profile />
      <Outlet />
    </section>
  );
};

export default ProfileLayout;
