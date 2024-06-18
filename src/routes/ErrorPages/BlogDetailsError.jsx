import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useRouteError } from "react-router-dom";

const BlogDetailsError = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col font-rubik gap-4 h-screen items-center justify-center">
      <h1 className="text-3xl font-semibold ">{error.message}</h1>
      <Link to={"/"} className="text-xl">
        Let&apos;s get you back home{" "}
        <FaArrowRightLong className="text-2xl inline text-malachite" />
      </Link>
    </div>
  );
};

export default BlogDetailsError;
