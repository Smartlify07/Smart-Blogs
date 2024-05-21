import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-6 px-10 ">
      <div className="">
        <ul className="flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:gap-10 lg:items-center">
          <Link className="text-dark font-rubik text-base font-light">
            Home
          </Link>
          <Link className="text-dark font-rubik text-base font-light">
            Blogs
          </Link>
          <Link className="text-dark font-rubik text-base font-light">
            Careers
          </Link>
          <Link className="text-dark font-rubik text-base font-light">
            Privacy policy
          </Link>
          <Link className="text-dark font-rubik text-base font-light">
            Terms of use
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
