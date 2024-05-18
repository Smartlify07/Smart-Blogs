import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-6 px-10 ">
      <div className="">
        <ul className="flex flex-col lg:flex-row lg:justify-center lg:gap-10 lg:items-center">
          <Link className="text-dark font-rubik text-lg font-light">Home</Link>
          <Link className="text-dark font-rubik text-lg font-light">Blogs</Link>
          <Link className="text-dark font-rubik text-lg font-light">
            Careers
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
