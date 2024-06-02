import { Link, useRouteError } from "react-router-dom";
const FetchErrorPage = () => {
  const error = useRouteError();
  return (
    <section className="bg-white py-10 flex flex-col gap-3 items-center justify-center">
      <h1 className="text-3xl font-rubik font-semibold text-black">
        {error.message}
      </h1>

      <h3 className="text-seagreen text-2xl mt-4">
        <Link to={"/"}>Let&apos;s Get you back on track </Link>{" "}
      </h3>
    </section>
  );
};

export default FetchErrorPage;
