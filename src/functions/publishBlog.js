import getUrl from "./getUrl";
import fetchUserDetails from "./loaderfunctions/fetchUserDetails";

const publishBlog = async (postTitle, postBody, blogCoverImage) => {
  const { blogUrl } = getUrl();
  const userDetails = await fetchUserDetails();
  const { name: userName } = userDetails;
  try {
    if (postBody !== "" || postTitle !== "") {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          createdAt: Date.now(),
          title: postTitle,
          content: postBody,
          user: {
            name: userName,
            userImage: "",
          },
          upvotes: 0,
          blogCoverImage: blogCoverImage,
          comments: [],
        }),
      };
      const response = await fetch(blogUrl, options);
      if (!response.ok) {
        throw new Error("Couldn't make such request");
      }
      const data = await response.json();
      console.log(data);
      setTimeout(() => {}, 1000);
    }
  } catch (error) {
    console.log(error);
  }
};

export default publishBlog;
