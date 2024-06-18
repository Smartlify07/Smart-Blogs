import { Link } from "react-router-dom";
import shortenText from "../../functions/shortenText";
import LazyLoad from "react-lazyload";
import formatDate from "../../functions/dateFormatter";
import slugify from "../../functions/slugify";
import useUserDetails from "../../hooks/useUserDetails";
import { renderUserAvatar } from "../../functions/helperfunctions/renderUserAvatar";

/* eslint-disable react/prop-types */
const Blog = (props) => {
  const trimmedContent = shortenText(props.content);
  const {
    userProfileImage,
    userId: currentUserId,
    userName,
  } = useUserDetails();

  const sluggedTitle = slugify(props.title);
  const url = `/blogs/${sluggedTitle}/${props.id}`;

  const avatar = renderUserAvatar(
    props,
    currentUserId,
    userProfileImage,
    userName
  );

  return (
    <Link
      to={url}
      className="flex cursor-pointer flex-col gap-4 py-6  border-t border-b font-rubik lg:flex-row"
    >
      <div className="flex flex-col gap-4 lg:w-8/12">
        <div className="flex items-center gap-3">
          {avatar}
          <h4 className="text-dark text-base font-normal">
            {props.user.name}{" "}
          </h4>
          <p className="text-gray-500 text-sm">{formatDate(props.createdAt)}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-dark text-xl font-semibold">{props.title}</h1>
          <p className="text-[15px] font-sourcesans text-[#333]">
            {trimmedContent} ...
          </p>
        </div>
      </div>

      {/* Use lazy load for the image */}
      <LazyLoad
        className="lg:w-4/12"
        placeholder={
          <div className="bg-gray-200 w-full h-[150px] rounded-lg"></div>
        }
      >
        {props.blogCoverImage && (
          <img
            className="rounded-lg w-full object-cover"
            src={props.blogCoverImage}
            alt="blogcoverimage"
          />
        )}

        {!props.blogCoverImage && (
          <div className="py-5 px-5 text-sm text-black rounded-sm bg-gray-100 flex items-center justify-center h-[120px] w-full">
            <p>No Image</p>
          </div>
        )}
      </LazyLoad>
    </Link>
  );
};

export default Blog;
