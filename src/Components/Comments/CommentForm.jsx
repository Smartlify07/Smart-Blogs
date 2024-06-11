/* eslint-disable react/prop-types */
import { useState } from "react";
import useUserDetails from "../../hooks/useUserDetails";
import Button from "../Button";
import UserAvatar from "../UserAvatar";
import { postComment } from "../../functions/postComment";
const CommentForm = ({ blogId, setNewComments }) => {
  const { userName, userNameInitial } = useUserDetails();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(blogId, message, userName, setNewComments);
    setMessage("");
  };

  const cancelSubmit = () => {
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white shadow-md py-4 px-5 rounded-sm"
    >
      <div className="flex items-center gap-3">
        <UserAvatar userInitial={userNameInitial} />
        <p className="text-dark text-sm font-semibold font-rubik">{userName}</p>
      </div>
      <textarea
        name="message"
        placeholder="Write your message here"
        rows={3}
        value={message}
        onChange={handleChange}
        className="py-2 my-4 resize-none px-2 w-full rounded-sm font-rubik"
      ></textarea>

      <div className="flex items-center gap-4">
        <Button value={"Send"} />
        <Button handleSubmit={cancelSubmit} value={"Cancel"} />
      </div>
    </form>
  );
};

export default CommentForm;
