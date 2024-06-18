import { generateUID } from "./generateUID";
import getUrl from "./getUrl";
import { getCurrentUserId } from "./getCurrenUserId";

export const postComment = async (id, content, userName, setNewComments) => {
  try {
    const userId = await getCurrentUserId();
    const { blogUrl } = getUrl();
    const uId = generateUID();
    const blogDetailsResponse = await fetch(blogUrl + id);

    const blogDetailsData = await blogDetailsResponse.json();
    console.log(userId);

    if (!blogDetailsResponse.ok) {
      throw new Error(
        "Unable to make such request" + blogDetailsResponse.status
      );
    }
    const { comments } = blogDetailsData;

    const prevComments = [...comments];

    const newComment = {
      comment_id: uId,
      content: content,
      username: userName,
      timestamp: Date.now(),
      replies: [],
    };

    const updatedComments = [...prevComments, newComment];
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comments: updatedComments,
      }),
    };

    const commentsResponse = await fetch(blogUrl + id, requestOptions);
    if (!commentsResponse.ok) {
      throw new Error("Unable to make such request" + commentsResponse.status);
    } else {
      setNewComments(updatedComments);
    }
  } catch (error) {
    console.error(error);
  }
};
