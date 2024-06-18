import getUrl from "./getUrl";
import { getCurrentUserId } from "./getCurrenUserId";
export const deleteUserPost = async (postId) => {
  const { userProfileUrl } = getUrl();
  const userId = await getCurrentUserId();

  const response = await fetch(userProfileUrl + userId);

  if (!response.ok) {
    throw new Error("Response not ok" + response.status);
  }

  const userDetails = await response.json();
  const { posts } = userDetails;

  const filteredPosts = posts.filter((post) => post.id !== postId);

  const requestOptions = {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      posts: filteredPosts,
    }),
  };

  const updatedUserDetailsResponse = await fetch(
    userProfileUrl + userId,
    requestOptions
  );
  if (!response.ok) {
    throw new Error("Failed to make that request" + response.status);
  }

  console.log(await updatedUserDetailsResponse.json());
};
