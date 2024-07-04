/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";
import Blog from "../../Components/Blogs/Blog";
import useUserDetails from "../../hooks/useUserDetails";
import { Link } from "react-router-dom";
import React from "react";

const Profile = () => {
  const { userName, userNameInitial, userProfileImage, userPosts } =
    useUserDetails();
  const userBlogs = userPosts.map((blog) => blog);
  console.log(userBlogs);

  return (
    <section className=" px-3 font-rubik w-full flex flex-col gap-5  lg:gap-10 lg:px-20 lg:flex-row  lg:justify-between">
      <div className="flex flex-col gap-3 py-7 lg:w-7/12">
        <header className="mb-4">
          <h1 className="text-4xl text-center  flex justify-center items-center gap-3">
            Your Works <FaStar className="text-xl text-malachite" />
          </h1>
        </header>

        <div className="flex flex-col gap-3">
          {userBlogs.length === 0 && (
            <div className="flex flex-col items-center gap-4 my-4">
              <h1 className="text-3xl text-center text-seagreen  font-semibold">
                No creations yet?{" "}
                <span className="text-lg text-gray-700 ">
                  No worries, you can start now
                </span>
              </h1>

              <Link className="bg-seagreen py-3 px-5 text-white" to={"/write"}>
                Start writing
              </Link>
            </div>
          )}

          <UserBlogs userBlogs={userBlogs} />
        </div>
      </div>

      <div className=" border-l px-20 w-full  lg:w-4/12 flex flex-col gap-1">
        <div className="rounded-full w-20 h-20 mt-20 text-4xl text-white font-semibold bg-pakistangreen flex items-center justify-center">
          {!userProfileImage ? (
            userNameInitial.toUpperCase()
          ) : (
            <img
              src={userProfileImage}
              className="w-20 h-20 rounded-full object-cover"
            />
          )}
        </div>
        <h3 className="text-lg font-semibold mt-3">{userName}</h3>
        <Link to={"edit"} className="text-pakistangreen font-semibold mt-2">
          Edit profile
        </Link>
      </div>
    </section>
  );
};

const UserBlogs = ({ userBlogs }) => {
  console.log(userBlogs);
  return (
    <div className="w-full lg:w-auto py-2 px-3">
      {userBlogs.map((blog) => (
        <Blog
          key={blog.id}
          title={blog.title}
          user={blog.user}
          blogCoverImage={blog.blogCoverImage}
          content={blog.content}
          id={blog.id}
        />
      ))}
    </div>
  );
};

export default React.memo(Profile);
