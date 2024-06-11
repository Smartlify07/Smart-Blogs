import { generateUID } from "./generateUID";
import getUrl from "./getUrl";

export const postComment = async (id, content, userName, setNewComments) => {
  const { blogUrl } = getUrl();
  const uId = generateUID();

  try {
    const blogDetailsresponse = await fetch(blogUrl + id);
    const data = await blogDetailsresponse.json();
    if (!blogDetailsresponse.ok) {
      throw new Error(
        "Unable to make such request" + blogDetailsresponse.status
      );
    }
    const { comments } = data;

    const prevComments = [...comments];
    console.log(prevComments);

    const newComment = {
      comment_id: uId,
      content: content,
      username: userName,
      timestamp: Date.now(),
    };

    const updatedComments = [...prevComments, newComment];
    console.log(updatedComments);
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
    }

    const commentsData = await commentsResponse.json();
    setNewComments(updatedComments);
  } catch (error) {
    console.error(error);
  }
};
