import { addUserPost } from "./addUserPost";
import { generateUID } from "./generateUID";
import getUrl from "./getUrl";
import fetchUserDetails from "./loaderfunctions/fetchUserDetails";

const publishBlog = async (postTitle, postBody, blogCoverImage) => {
  const { blogUrl, currentUserUrl } = getUrl();

  const userDetails = await fetchUserDetails();
  const { name: userName } = userDetails;
  const blogId = generateUID();

  const currentUserResponse = await fetch(currentUserUrl);
  const { userId } = await currentUserResponse.json();
  try {
    if (postBody !== "" || postTitle !== "") {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: blogId,
          createdAt: Date.now(),
          title: postTitle,
          content: postBody,
          user: {
            name: userName,
            userImage: "",
            id: userId,
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

      await addUserPost(blogId, postTitle, postBody, blogCoverImage);
    }
  } catch (error) {
    console.log(error);
  }
};

export default publishBlog;
