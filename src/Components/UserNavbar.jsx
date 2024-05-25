import { useEffect, useState } from "react";
import { FaPenNib } from "react-icons/fa6";
import { Link } from "react-router-dom";

import fetchUserDetails from "../functions/loaderfunctions/fetchUserDetails";

const UserNavbar = () => {
  const [userInitial, setUserInitial] = useState("");
  useEffect(() => {
    const getUserDetails = async () => {
      const userData = await fetchUserDetails();
      setUserInitial(userData.name[0].toUpperCase()); // Get the first letter of the name
    };

    getUserDetails();
  }, []);
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

          <Link className="">
            <div className="w-8 h-8 rounded-full flex justify-center items-center bg-malachite text-white font-semibold text-lg">
              <h4>{userInitial}</h4>
            </div>
          </Link>
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
