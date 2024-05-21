import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="flex  min-h-screen h-full">
        <div className="hidden bg-black h-screen flex-col gap-6 text-white items-center justify-center lg:flex lg:w-7/12 xl:w-6/12">
          <img
            src="./images/Authentication/Welcome.svg"
            alt="login-illustration"
            className="w-96 object-cover "
          />
        </div>

        <div className=" flex flex-col w-full gap-6 items-center justify-center min-h-screen lg:w-6/12  ">
          <h1 className="text-black text-left text-2xl font-semibold font-rubik">
            Welcome Back!
          </h1>

          <p className="text-black text-sm font-rubik">
            Don&apos; have an account?{" "}
            <Link to={"/signup"} className="text-malachite">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
