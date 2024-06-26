import getUrl from "./getUrl";

export const addUserPost = async (id, postTitle, postBody, blogCoverImage) => {
  try {
    const { userProfileUrl, currentUserUrl } = getUrl();

    const currentUserResponse = await fetch(currentUserUrl);
    const { userId } = await currentUserResponse.json();

    const userDetailsResponse = await fetch(userProfileUrl + userId);
    const userDetails = await userDetailsResponse.json();
    const { posts: existingPosts, name: userName } = userDetails;

    // Create the new post object
    const newPost = {
      createdAt: Date.now(),
      id: id,
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
    };

    // Append the new post to the existing posts
    const updatedPosts = [...existingPosts, newPost];

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ posts: updatedPosts }),
    };

    const response = await fetch(userProfileUrl + userId, requestOptions);
    if (!response.ok) {
      throw new Error("Couldn't make such request" + response.status);
    }
  } catch (error) {
    console.error(error);
  }
};
