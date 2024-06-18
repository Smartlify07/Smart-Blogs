const getUrl = () => {
  const blogUrl = "https://smart-blogs-json-server.vercel.app/blogs/";
  const userProfileUrl = "https://smart-blogs-json-server.vercel.app/users/";
  const currentUserUrl =
    "https://smart-blogs-json-server.vercel.app/current_user";
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
