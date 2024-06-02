import { FaStar } from "react-icons/fa6";
import fetchBlogPosts from "../../functions/loaderfunctions/fetchBlogPosts";
import Blog from "../../Components/Blogs/Blog";
import useUserDetails from "../../hooks/useUserDetails";
import { Link } from "react-router-dom";
const blogs = await fetchBlogPosts();

const Profile = () => {
  const { userName, userNameInitial } = useUserDetails();
  return (
    <section className="px-20 font-rubik w-full flex justify-between gap-10">
      <div className="flex flex-col gap-3 py-7 w-7/12">
        <header className="mb-4">
          <h1 className="text-4xl flex items-center gap-3">
            Your Works <FaStar className="text-xl text-malachite" />
          </h1>
        </header>

        <div className="flex flex-col gap-3">
          <UserBlogs />
        </div>
      </div>

      <div className=" border-l px-20 w-4/12 flex flex-col gap-1">
        <div className="rounded-full w-20 h-20 mt-20 text-4xl text-white font-semibold bg-malachite flex items-center justify-center">
          {userNameInitial.toUpperCase()}
        </div>
        <h3 className="text-lg font-semibold mt-3">{userName}</h3>
        <Link to={"edit"} className="text-seagreen font-semibold mt-2">
          Edit profile
        </Link>
      </div>
    </section>
  );
};

const UserBlogs = () => {
  const { userName } = useUserDetails();
  const userBlogs = blogs.filter((blog) => blog.user.name === userName);
  console.log(userBlogs);
  return (
    <div className=" py-2 px-3">
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

export default Profile;
