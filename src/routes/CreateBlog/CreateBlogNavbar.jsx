/* eslint-disable react/prop-types */
import Button from "../../Components/Button";
import UserAvatar from "../../Components/UserAvatar";
import useUserDetails from "../../hooks/useUserDetails";
import publishBlog from "../../functions/publishBlog";
import { Link, useNavigate } from "react-router-dom";
import { addUserPost } from "../../functions/addUserPost";

const CreateBlogNavbar = ({ postBody, postTitle, blogCoverImage }) => {
  const { userNameInitial, userProfileImage } = useUserDetails();
  const navigate = useNavigate();

  return (
    <nav className="py-10 px-10 font-rubik lg:py-6">
      <div className="flex items-center justify-between ">
        <Link
          to={"/"}
          className="text-black text-xl lg:text-2xl font-semibold font-rubik"
        >
          <span className="text-malachite">Smart</span>blogs
        </Link>

        <div className="flex items-center gap-5">
          <Button
            value="Publish"
            handleSubmit={async () => {
              await publishBlog(postTitle, postBody, blogCoverImage);
              await addUserPost(postTitle, postBody, blogCoverImage);
              setTimeout(() => {
                navigate("/");
              }, 1000);
            }}
          />
          {!userProfileImage && (
            <UserAvatar userInitial={userNameInitial.toUpperCase()} />
          )}
          {userProfileImage && (
            <img
              src={userProfileImage}
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default CreateBlogNavbar;
