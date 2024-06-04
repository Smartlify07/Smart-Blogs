/* eslint-disable react/prop-types */
import Button from "../../Components/Button";
import UserAvatar from "../../Components/UserAvatar";
import useUserDetails from "../../hooks/useUserDetails";
import publishBlog from "../../functions/publishBlog";
import { useNavigate } from "react-router-dom";

const CreateBlogNavbar = ({ postBody, postTitle, blogCoverImage }) => {
  const { userNameInitial } = useUserDetails();
  const navigate = useNavigate();

  return (
    <nav className="py-10 px-10 font-rubik lg:py-6">
      <div className="flex items-center justify-between ">
        <h1 className="text-black text-xl lg:text-2xl font-semibold font-rubik">
          <span className="text-malachite">Smart</span>blogs
        </h1>

        <div className="flex items-center gap-5">
          <Button
            value="Publish"
            handleSubmit={async () => {
              await publishBlog(postTitle, postBody, blogCoverImage);
              setTimeout(() => {
                navigate("/");
              }, 1000);
            }}
          />
          <UserAvatar userInitial={userNameInitial.toUpperCase()} />
        </div>
      </div>
    </nav>
  );
};

export default CreateBlogNavbar;