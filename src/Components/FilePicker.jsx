/* eslint-disable react/prop-types */
import { useRef } from "react";
import { FaCamera } from "react-icons/fa6";
import getUrl from "../functions/getUrl";
import { uploadImage } from "../functions/uploadImage";

const FilePicker = ({ setImgSrc, positioned }) => {
  const { cloudinaryImagesUrl } = getUrl();
  const fileInputRef = useRef();
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const reader = new FileReader();
        const imageUrl = await uploadImage(file, cloudinaryImagesUrl);
        reader.onload = () => {
          setImgSrc(imageUrl);
        };
        reader.readAsDataURL(file); // You can use other methods like readAsDataURL for different file types
      } catch (error) {
        console.error(error);
      }
    }
    console.log(file);
  };

  const getFile = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <FaCamera
        onClick={getFile}
        className={`text-gray-700 cursor-pointer ${
          positioned && `absolute self-start`
        } bottom-0 right-0`}
      />
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </>
  );
};

export default FilePicker;
