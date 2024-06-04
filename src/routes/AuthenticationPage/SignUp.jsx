import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../Components/Button";
import { handleSignUp } from "../../functions/handleSignUp.js";
import useAuthentication from "../../hooks/useAuthentication";

const SignUp = () => {
  const { setIsLoggedIn } = useAuthentication();
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormFields((values) => ({
      ...values,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formFields.name || !formFields.email) {
      console.log("All fields are required");
      return;
    } else {
      handleSignUp({ name: formFields.name, email: formFields.email });
      setFormFields({
        name: "",
        email: "",
      });
      setIsLoggedIn(true);
      navigate("/");
    }
  }

  return (
    <section className="w-full min-h-screen">
      <div className="flex overflow-hidden relative  min-h-screen h-full">
        <div className="hidden bg-black h-screen flex-col gap-6 text-white items-center justify-center lg:flex lg:w-7/12 xl:w-6/12 ">
          <h1 className="text-white font-extrabold text-3xl text-center font-rubik ">
            Dive deeper into your interests
          </h1>
        </div>

        <div className=" flex flex-col w-full gap-6 items-center justify-center min-h-screen lg:w-6/12  ">
          <h1 className="text-black text-left text-2xl font-semibold font-rubik">
            Sign up for{" "}
            <span className="text-malachite text-2xl"> Smart Blogs</span>
          </h1>

          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-5 items-center justify-center lg:w-6/12 font-rubik"
          >
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="Name">Name</label>
              <input
                className=" border border-malachite w-full p-3 placeholder:text-sm focus:border-2 focus:border-seagreen focus:outline-none"
                type="text"
                name="name"
                placeholder="Name"
                value={formFields.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email">Email</label>
              <input
                className=" border border-malachite w-full p-3 placeholder:text-sm focus:border-2 focus:border-seagreen focus:outline-none"
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formFields.email}
                onChange={handleChange}
              />
            </div>

            <Button value="Sign up"></Button>
          </form>

          <p className="text-black text-sm font-rubik">
            Already have an account?{" "}
            <Link to={"/login"} className="text-malachite">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
