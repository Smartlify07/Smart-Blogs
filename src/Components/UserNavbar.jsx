import { FaPenNib } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useUserDetails from "../hooks/useUserDetails";
import UserAvatar from "./UserAvatar";

const UserNavbar = () => {
  const { userNameInitial, userProfileImage } = useUserDetails();
  return (
    <nav className="py-5 px-5 bg-white border-b font-rubik lg:py-4 lg:px-10">
      <nav className="flex items-center justify-between">
        <div className="flex items-center  gap-7">
          <Link to="/" className="text-2xl font-semibold lg:text-2xl">
            <span className="text-malachite">Smart</span>Blogs
          </Link>

          <div className="relative">
            <input
              type="search"
              className="bg-[#f6f6f6] hidden py-3 px-7 rounded-3xl text-black font-rubik placeholder:text-gray-500 placeholder:text-base focus:border-none focus:outline-none lg:inline"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="hidden items-center gap-7 lg:flex">
          <Link
            to={"/write"}
            className="text-[#777] text-lg flex items-center gap-3"
          >
            Write <FaPenNib />
          </Link>

          {!userProfileImage && (
            <UserAvatar userInitial={userNameInitial.toUpperCase()} />
          )}

          {userProfileImage && (
            <Link to={"/dashboard"} className="">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={userProfileImage}
              />
            </Link>
          )}
        </div>

        <div className="flex flex-col gap-1 md:hidden">
          <div className="w-9 h-1 bg-black rounded-lg"></div>
          <div className="w-9 h-1 bg-black rounded-lg"></div>
          <div className="w-9 h-1 bg-black rounded-lg"></div>
        </div>
      </nav>
    </nav>
  );
};

export default UserNavbar;
