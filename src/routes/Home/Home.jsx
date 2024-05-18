import { Link } from "react-router-dom";
import { BiStar } from "react-icons/bi";

const Home = () => {
  return (
    <section className="py-20 px-6 bg-malachite lg:h-screen lg:px-20">
      <div className="flex flex-col gap-20 lg:flex-row lg:justify-between lg:gap-0">
        <div className="flex flex-col gap-6 ">
          <header className="lg:w-9/12 relative">
            <h1 className="text-white text-5xl leading-[3rem] font-light font-playfair lg:text-8xl">
              Create. Share. Inspire.
            </h1>
            <BiStar className="absolute -top-6 text-white text-2xl lg:-top-5" />
          </header>
          <p className="text-black font-semibold font-rubik text-xl  mt-3  lg:text-2xl lg:w-7/12">
            Start your blogging journey today and be part of our dynamic
            storytelling community!
          </p>

          <Link
            to={"/signup"}
            className="bg-black px-10 text-base font-rubik py-3 rounded-sm self-start font-semibold text-white"
          >
            Get started
          </Link>
        </div>

        <div className=" hidden self-center  justify-center items-center w-[250px] h-[250px] rounded-full border-2 border-white lg:w-[300px] lg:flex lg:h-[300px]">
          <h2 className="text-white text-2xl">Let&apos;s Get creative</h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
