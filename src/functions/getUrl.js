const getUrl = () => {
  const blogUrl = "http://localhost:4000/blogs/";
  const userProfileUrl = "http://localhost:4000/profile";
  const cloudinaryImagesUrl =
    "https://api.cloudinary.com/v1_1/dgpbznsc3/image/upload";
  return { blogUrl, userProfileUrl, cloudinaryImagesUrl };
};

export default getUrl;
