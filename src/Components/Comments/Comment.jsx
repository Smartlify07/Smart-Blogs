/* eslint-disable react/prop-types */

import { useState } from "react";
import formatDate from "../../functions/dateFormatter";
import slugify from "../../functions/slugify";
import Replies from "../Replies/Replies";
import { FaReply } from "react-icons/fa6";

const Comment = ({
  comment_id,
  content,
  username,
  userImage,
  timestamp,
  replies,
  setNewComments,
}) => {
  const formattedContent = slugify(content);
  const formattedDate = formatDate(timestamp);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const toggleReplyForm = () => {
    setShowReplyForm((prevState) => !prevState);
  };
  return (
    <>
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

        <div className="flex w-full items-center">
          <button
            onClick={toggleReplyForm}
            className="flex items-center gap-1 text-dark font-rubik"
          >
            Reply <FaReply className="text-malachite text-sm" />
          </button>
        </div>
      </div>

      <Replies
        setNewComments={setNewComments}
        replies={replies}
        commentId={comment_id}
        setShowReplyForm={setShowReplyForm}
        showReplyForm={showReplyForm}
      />
    </>
  );
};

export default Comment;
