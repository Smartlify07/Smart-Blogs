import { Link } from "react-router-dom";
import shortenText from "../../functions/shortenText";
import { BsArrowRight } from "react-icons/bs";
import LazyLoad from "react-lazyload";
import formatDate from "../../functions/dateFormatter";
import slugify from "../../functions/slugify";

/* eslint-disable react/prop-types */
const Blog = (props) => {
  const trimmedContent = shortenText(props.content);
  const sluggedTitle = slugify(props.title);
  const url = `/blogs/${sluggedTitle}/${props.id}`;
  return (
    <div className="flex cursor-pointer flex-col gap-4 py-6  border-t border-b font-rubik lg:flex-row">
      <div className="flex flex-col gap-4 lg:w-8/12">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-[50%] object-cover"
            src={props.user.userImage}
          />

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

        <Link
          to={url}
          className="text-seagreen flex gap-2 items-center text-sm font-regular"
        >
          Read more <BsArrowRight className="text-lg" />
        </Link>
      </div>

      {/* Use lazy load for the image */}
      <LazyLoad
        className="lg:w-4/12"
        placeholder={
          <div className="bg-gray-200 w-full h-[150px] rounded-lg"></div>
        }
      >
        <img
          className="rounded-lg w-full object-cover"
          src={props.blogCoverImage}
          alt="blogcoverimage"
        />
      </LazyLoad>
    </div>
  );
};

export default Blog;
