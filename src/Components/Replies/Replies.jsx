/* eslint-disable react/prop-types */
import ReplyForm from "./ReplyForm";
import Reply from "./Reply";
import { useLoaderData } from "react-router-dom";

const Replies = ({
  replies,
  commentId,
  setNewComments,
  showReplyForm,
  setShowReplyForm,
}) => {
  const blogData = useLoaderData();

  const { id: blogId } = blogData;

  return (
    <section className="">
      <div className="my-4">
        <ReplyForm
          blogId={blogId}
          commentId={commentId}
          setNewComments={setNewComments}
          setShowReplyForm={setShowReplyForm}
          showReplyForm={showReplyForm}
        />
      </div>

      <div className="flex flex-col px-4 border-l-2 gap-3">
        {replies.map((reply) => (
          <Reply key={reply.reply_id} {...reply} />
        ))}
      </div>
    </section>
  );
};

export default Replies;
