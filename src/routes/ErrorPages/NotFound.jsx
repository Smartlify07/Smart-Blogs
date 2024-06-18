import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="h-screen flex flex-col gap-3 font-rubik items-center justify-center">
      <h1 className="text-2xl font-semibold">Page Not Found 😶</h1>
      <Link to={"/"} className="text-xl">
        Let&apos;s get you back home{" "}
        <FaArrowRightLong className="text-2xl ml-3 inline text-malachite" />
      </Link>
    </section>
  );
};

export default NotFound;
