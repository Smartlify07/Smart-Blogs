import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-5 px-6 bg-white font-rubik lg:px-20">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-3xl font-semibold lg:text-3xl">
          <span className="text-pakistangreen">Smart</span>Blogs
        </Link>
        <ul className="hidden  items-center gap-10 justify-between md:flex ">
          <Link className="text-dark text-lg" to={"/create"}>
            Write
          </Link>
          <Link to={"/signup"} className="text-dark text-lg">
            Sign in
          </Link>
          <Link className="text-dark text-lg">Our Story</Link>
          <Link
            to={"/signup"}
            className="bg-pakistangreen rounded-sm text-white font-rubik font-semibold px-6 py-3 text-base transition-all ease-in hover:bg-darkgreen"
          >
            Get started
          </Link>
        </ul>

        <div className="flex flex-col gap-1 md:hidden cursor-pointer">
          <div className="w-9 h-1 bg-black rounded-lg"></div>
          <div className="w-9 h-1 bg-black rounded-lg"></div>
          <div className="w-9 h-1 bg-black rounded-lg"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
