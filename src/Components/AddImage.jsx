/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
import getUrl from "../functions/getUrl";

const AddImage = ({ blogImage, setBlogImage, toggleDialogBox }) => {
  const { cloudinaryImagesUrl } = getUrl();
  const [previewImage, setPreviewImage] = useState();
  const [showPreview, setShowPreview] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.files);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };
  const toggleImagePreview = () => {
    setShowPreview((prevState) => !prevState);
  };
  //Upload image to cloudinary
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", blogImage);
    formData.append("upload_preset", "dylxjcob");

    const response = await fetch(cloudinaryImagesUrl, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);
    setBlogImage(data.url);
  };

  return (
    <div className="flex flex-col gap-4 my-3 ">
      {previewImage && (
        <div className="w-7/12 self-center">
          <Button value={"Preview Image"} handleSubmit={toggleImagePreview} />
        </div>
      )}
      {showPreview && (
        <img src={previewImage} className="w-[200px] self-center mb-3" alt="" />
      )}
      <div className="flex flex-col gap-4 items-center justify-center">
        <input
          onChange={(event) => {
            setBlogImage(event.target.files[0]);
            handleChange(event);
          }}
          type="file"
          className="file:bg-malachite file:rounded-sm file:px-7 file:py-3 file:border-none file:text-white file:font-rubik file:cursor-pointer "
        />

        <div className="w-7/12">
          <Button
            handleSubmit={() => {
              uploadImage();
              toggleDialogBox();
            }}
            value={"Upload image"}
          />
        </div>
      </div>
    </div>
  );
};

export default AddImage;
