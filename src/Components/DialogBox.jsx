/* eslint-disable react/prop-types */
import { FaX } from "react-icons/fa6";
import AddImage from "./AddImage";

const DialogBox = ({
  setBlogImage,
  blogImage,
  showDialogBox,
  toggleDialogBox,
}) => {
  return (
    <div
      className={
        showDialogBox &&
        `
      w-6/12 pt-0 pb-10 flex flex-col gap-6  self-center absolute left-[25%] border-dashed border bg-transparent  z-10 top-[30%] shadow-2xl border-gray-800`
      }
    >
      <FaX
        className="text-gray-900 text-2xl self-end cursor-pointer"
        onClick={() => toggleDialogBox()}
      />
      <AddImage
        toggleDialogBox={() => toggleDialogBox()}
        blogImage={blogImage}
        setBlogImage={setBlogImage}
      />
    </div>
  );
};

export default DialogBox;
