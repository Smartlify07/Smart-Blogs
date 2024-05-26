/* eslint-disable react/prop-types */

const AddImage = ({ blogImage, setBlogImage }) => {
  const handleChange = (e) => {
    console.log(e.target.files);
    setBlogImage(URL.createObjectURL(e.target.files[0]));
  };
  console.log(blogImage);
  return (
    <div className="flex items-center justify-center my-3">
      <input
        onChange={handleChange}
        type="file"
        className="file:bg-malachite file:rounded-sm file:px-7 file:py-3 file:border-none file:text-white file:font-rubik file:cursor-pointer "
      />
      <img src={blogImage} className="w-[300px]" alt="" />
    </div>
  );
};

export default AddImage;
