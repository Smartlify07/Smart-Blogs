/* eslint-disable react/prop-types */
import { useRef } from "react";
import { FaCamera } from "react-icons/fa6";

const FilePicker = ({ imageSrc, setImgSrc }) => {
  const fileInputRef = useRef();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImgSrc(e.target.result);
        console.log(e.target.result);
        console.log(imageSrc); // Do something with the file content
      };
      reader.readAsDataURL(file); // You can use other methods like readAsDataURL for different file types
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
        className="text-gray-700 cursor-pointer absolute bottom-0 right-0"
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
