import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-6 px-10 bg-gradient-to-r from-black to-pakistangreen ">
      <ul className="flex flex-col items-center justify-center gap-5   lg:flex-row lg:justify-center lg:gap-10 lg:items-center text-white">
        <Link className="text-dark font-rubik text-base font-light">Home</Link>
        <Link className="text-dark font-rubik text-base font-light">Blogs</Link>
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
    </footer>
  );
};

export default Footer;
