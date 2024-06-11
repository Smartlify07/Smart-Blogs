/* eslint-disable react/prop-types */

import formatDate from "../../functions/dateFormatter";
import slugify from "../../functions/slugify";

const Comment = ({ content, username, userImage, timestamp }) => {
  const formattedContent = slugify(content);
  const formattedDate = formatDate(timestamp);
  return (
    <div className="py-3 px-1 flex flex-col gap-4 font-rubik">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {!userImage && (
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-malachite">
              <p className="text-white uppercase font-bold text-lg">
                {username.charAt(0)}
              </p>
            </div>
          )}

          {userImage && (
            <div className="w-10 h-10 rounded-full">
              <img
                src={userImage}
                className="object-cover rounded-full"
                alt=""
              />
            </div>
          )}

          <div className="flex flex-col ">
            <p className="text-black text-sm">{username}</p>
            <p className="text-gray-400 text-sm">{formattedDate}</p>
          </div>
        </div>
      </div>
      <p className="text-black text-sm font-normal">{formattedContent}</p>
    </div>
  );
};

export default Comment;
