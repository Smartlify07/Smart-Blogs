const getUrl = () => {
  const blogUrl = "https://blog-server-yehd.onrender.com/blogs/";
  const userProfileUrl = "https://blog-server-yehd.onrender.com/users/";
  const currentUserUrl = "https://blog-server-yehd.onrender.com/current_user";
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
