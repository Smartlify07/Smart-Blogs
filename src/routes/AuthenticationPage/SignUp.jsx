import { useNavigate } from "react-router-dom";
import { handleSignUp } from "../../functions/handleSignUp.js";
import useAuthentication from "../../hooks/useAuthentication";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../Components/TextInput.jsx";

const SignUp = () => {
  const { setIsLoggedIn } = useAuthentication();
  const navigate = useNavigate();

  return (
    <section className="w-full h-screen flex items-center py-5 justify-center overflow-hidden">
      <div className="border h-full flex items-center justify-center   lg:w-7/12">
        <div className="bg-[url(./images/signup.jpg)] object-contain relative bg-cover bg-center hidden  items-center justify-center h-full rounded-sm before:opacity-30 before:bg-pakistangreen before:absolute before:h-full before:w-full lg:w-2/3 lg:flex">
          <h1 className="z-10 text-3xl flex items-center gap-2 font-bold  text-black font-rubik italic ">
            Get{" "}
            <div className="bg-pakistangreen block skew-y-[4deg] text-white px-2 py-3">
              started!
            </div>
          </h1>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(2, "Invalid name")
              .required("Name is required"),
            email: Yup.string()
              .email("That isn't a valid email address")
              .required("Email address is required"),
          })}
          onSubmit={(values) => {
            console.log(values);
            handleSignUp({
              name: values.name,
              email: values.email,
            });

            console.log("Clicked");
            setIsLoggedIn(true);
            navigate("/");
          }}
        >
          <Form className="flex  flex-col gap-6 px-6 lg:w-2/3">
            <h1 className="text-3xl font-rubik font-semibold text-center text-pakistangreen">
              Smart <span className="text-black">Blogs</span>
            </h1>
            <TextInput
              name="name"
              label={"Name"}
              type="text"
              placeholder="John Doe"
            />
            <TextInput
              name="email"
              label={"Email address"}
              type="email"
              placeholder="johndoe@example.com"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-pakistangreen to-black py-3 px-7 font-rubik font-semibold text-white transition-all hover:bg-darkgreen"
            >
              Get started
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default SignUp;
