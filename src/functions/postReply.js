import { generateUID } from "./generateUID";
import getUrl from "./getUrl";

export const postReply = async (
  blogId,
  commentId,
  content,
  userName,
  setNewComments
) => {
  const { blogUrl } = getUrl();
  const uId = generateUID();

  try {
    const blogDetailsresponse = await fetch(blogUrl + blogId);
    const data = await blogDetailsresponse.json();
    if (!blogDetailsresponse.ok) {
      throw new Error(
        "Unable to make such request" + blogDetailsresponse.status
      );
    }
    const { comments } = data; // Get the comments from the blog data

    // Find the comment to which we want to add the reply
    const updatedComments = comments.map((comment) => {
      if (comment.comment_id === commentId) {
        // Add the new reply to the replies array
        const newReply = {
          reply_id: uId,
          content: content,
          username: userName,
          timestamp: Date.now(),
        };
        const updatedReplies = comment.replies
          ? [...comment.replies, newReply]
          : [newReply]; // Use updated replies to store the array for the replies
        return {
          ...comment,
          replies: updatedReplies,
        };
      }
      return comment;
    });

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comments: updatedComments,
      }),
    };

    const commentsResponse = await fetch(blogUrl + blogId, requestOptions);
    if (!commentsResponse.ok) {
      throw new Error(
        "Unable to make such request: " + commentsResponse.status
      );
    }

    setNewComments(updatedComments);
  } catch (error) {
    console.error(error);
  }
};
