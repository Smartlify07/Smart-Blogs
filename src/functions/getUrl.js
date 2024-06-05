const getUrl = () => {
  const blogUrl = "http://localhost:4000/blogs/";
  const userProfileUrl = "http://localhost:4000/users/";
  const currentUserUrl = "http://localhost:4000/current_user";
  const cloudinaryImagesUrl =
    "https://api.cloudinary.com/v1_1/dgpbznsc3/image/upload";
  return {
    blogUrl,
    userProfileUrl,
    cloudinaryImagesUrl,
    currentUserUrl,
  };
};

export default getUrl;
