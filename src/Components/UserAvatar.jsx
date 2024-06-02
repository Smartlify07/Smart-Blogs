/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const UserAvatar = ({ userInitial }) => {
  return (
    <Link to={"/dashboard"}>
      <div className="w-8 h-8 rounded-full flex justify-center items-center bg-malachite text-white font-semibold text-lg">
        <h4>{userInitial}</h4>
      </div>
    </Link>
  );
};

export default UserAvatar;
