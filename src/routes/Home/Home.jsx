import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="py-10 px-6  lg:h-screen flex items-center lg:px-20 mb-10">
      <div className="flex flex-col gap-20 lg:flex-row lg:items-center lg:gap-0">
        <div className="flex flex-col gap-6  lg:w-8/12 xl:w-full">
          <header className="xl:w-10/12 ">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-black to-pakistangreen text-black text-5xl leading-[3rem] font-extrabold  font-playfair lg:text-7xl xl:text-7xl ">
              Create. Share. Inspire.
            </h1>
          </header>
          <p className="text-black  font-rubik text-xl  mt-3  lg:text-2xl lg:w-10/12">
            Start your blogging journey today and be part of our dynamic
            storytelling community!
          </p>

          <Link
            to={"/signup"}
            className="bg-pakistangreen px-10 text-base font-rubik py-3 rounded-sm self-start font-semibold text-white"
          >
            Get started
          </Link>
        </div>

        <div className="hidden relative items-center justify-end lg:w-1/3 lg:flex xl:w-2/3">
          <img src="./images/woman.jpg" className="xl:w-3/4" alt="" />

          <p className="absolute bottom-4 text-lg left-40 text-white font-rubik italic">
            Creative!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
