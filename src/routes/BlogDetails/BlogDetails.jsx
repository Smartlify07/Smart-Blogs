/* eslint-disable react/prop-types */
import LazyLoad from "react-lazyload";
import { useLoaderData } from "react-router-dom";
import formatDate from "../../functions/dateFormatter";
import Button from "../../Components/Button";
import { FaHandsClapping, FaRegComment, FaX } from "react-icons/fa6";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import useUserDetails from "../../hooks/useUserDetails";
import Comments from "../../Components/Comments/Comments";
import { useState } from "react";

const BlogDetails = () => {
  const blog = useLoaderData();

  const { title, blogCoverImage, content, createdAt, user } = blog;
  const { userProfileImage } = useUserDetails();
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments((prevState) => !prevState);
  };

  console.log(showComments);

  return (
    <section className=" font-rubik px-6 py-14 mb-10 relative  w-full  flex gap-3 overflow-x-hidden  lg:px-20">
      <div className="w-full ">
        <div className="flex flex-col gap-3 items-start lg:items-center lg:gap-9 lg:py-6">
          <header>
            <h1 className="text-4xl font-playfair font-extrabold mb-3 lg:text-5xl">
              {title}
            </h1>
          </header>

          <div className="flex items-center gap-3">
            <img
              src={user.userImage || userProfileImage}
              className="w-10 h-10 rounded-full object-cover "
            />

            <h4 className="text-base text-black">{user.name}</h4>
            <h4 className="text-gray-400 text-sm">{formatDate(createdAt)}</h4>
          </div>
          <ActionBar toggleComments={toggleComments} />

          <LazyLoad
            className="w-full"
            placeholder={
              <div className="bg-gray-100 w-[300px] h-[400px] rounded-md"></div>
            }
          >
            <div className="flex justify-center ">
              <img src={blogCoverImage} className="lg:w-7/12" alt="blogcover" />
            </div>
          </LazyLoad>

          <p className="text-black font-sourcesans text-lg leading-8 mt-10 mb-5  lg:w-7/12">
            {content.split("\n").map((item, index) => (
              <span key={index}>
                {item} <br />
              </span>
            ))}
          </p>

          <ActionBar toggleComments={toggleComments} />
        </div>

        <section className="bg-gray-100 flex flex-col  items-center gap-6 py-10 px-20 mt-10 lg:py-20 lg:gap-24 lg:flex-row lg:justify-center">
          <div className="flex items-center flex-col gap-3 lg:items-start">
            <img
              src={user.userImage || userProfileImage}
              className="w-16 h-16 rounded-full object-cover lg:w-20 lg:h-20 "
              alt=""
            />

            <h3 className="text-black font-semibold text-lg lg:text-2xl">
              Written by {user.name}
            </h3>
          </div>

          <div className="flex items-center ">
            <Button value="Follow" />
          </div>
        </section>
      </div>

      <div
        className={`bg-white absolute transition-all ease-out top-0 right-0 transform ${
          showComments ? "translate-x-0 w-full lg:w-1/3" : "translate-x-[300%]"
        } py-6 px-6 shadow-2xl h-full lg:h-screen overflow-y-scroll`}
      >
        <FaX
          onClick={toggleComments}
          className="text-black font-semibold absolute top-4 right-4 cursor-pointer text-sm"
        />
        <Comments showComments={showComments} />
      </div>
    </section>
  );
};

export const ActionBar = ({ toggleComments }) => {
  const blog = useLoaderData();

  const { comments, upvotes } = blog;
  return (
    <div className="flex items-center gap-7 my-4  justify-center lg:justify-between lg:w-6/12">
      <div className="flex items-center gap-10">
        <div className="flex gap-2 items-center">
          <FaHandsClapping className=" cursor-pointer font-light text-xl text-gray-600" />
          <p className="text-gray-600 text-base ">{upvotes}</p>
        </div>

        <div className="flex gap-2 items-center">
          <FaRegComment
            onClick={() => toggleComments()}
            className=" cursor-pointer font-light text-xl text-gray-600"
          />
          <p className="text-gray-600 text-base">{comments.length}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <MdOutlineBookmarkAdd className="cursor-pointer font-light text-3xl text-gray-600" />
      </div>
    </div>
  );
};

export default BlogDetails;
