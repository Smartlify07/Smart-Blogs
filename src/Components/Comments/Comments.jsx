import { useLoaderData } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useState } from "react";

const Comments = () => {
  const blogData = useLoaderData();
  const { comments, id } = blogData;

  const [newComments, setNewComments] = useState(comments);
  const numberOfComments = newComments.length;

  console.log(newComments);

  return (
    <section className="">
      <div className="my-4">
        <CommentForm blogId={id} setNewComments={setNewComments} />
      </div>
      <h1 className="text-black text-2xl font-normal font-rubik mb-5">
        Responses ({numberOfComments})
      </h1>
      <div className="flex flex-col gap-3">
        {newComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </section>
  );
};

export default Comments;
