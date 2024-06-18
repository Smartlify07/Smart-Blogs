import { BiTrash } from "react-icons/bi";
import { deletePost } from "../functions/deletePost";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const DeleteModal = ({ blogId, showDeletePrompt }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`py-4 w-[200px] px-5 absolute -top-24 translate-x-[500%]  transition-all ${
        showDeletePrompt && `translate-x-[] -translate-y-4`
      }  rounded-md`}
    >
      <button
        onClick={async () => {
          await deletePost(blogId, navigate);
        }}
        className="flex items-center gap-2 border-2 border-red-800 rounded-sm py-3 px-4 font-semibold transition-all text-red-800 hover:bg-red-800 hover:font-semibold hover:text-white"
      >
        Delete blog <BiTrash className="text-xl" />
      </button>
    </div>
  );
};

export default DeleteModal;
