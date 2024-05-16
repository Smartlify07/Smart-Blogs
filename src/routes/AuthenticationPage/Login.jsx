import Form from "../../Components/Form";

const Login = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="flex  min-h-screen  h-full">
        <div className="bg-black  h-screen flex flex-col gap-6 text-white  items-center justify-center lg:w-7/12 xl:w-6/12">
          <img
            src="./images/Authentication/Welcome.svg"
            alt="login-illustration"
            className="w-96 object-cover "
          />
        </div>

        <div className="w-6/12 flex flex-col gap-6 items-center justify-center min-h-screen ">
          <h1 className="text-black text-left text-2xl font-semibold font-rubik">
            Welcome!
          </h1>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Login;
