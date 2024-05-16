const Form = () => {
  return (
    <form className="flex flex-col gap-5 items-center justify-center lg:w-6/12 font-rubik ">
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="smartlify@gmail.com"
          className=" border border-malachite w-full p-3 placeholder:text-sm focus:border-2 focus:border-seagreen focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email">Password</label>
        <input
          type="email"
          placeholder="password"
          className=" border border-malachite w-full p-3 placeholder:text-sm focus:border-2 focus:border-seagreen focus:outline-none"
        />
      </div>

      <button className="bg-malachite px-7 py-3 rounded-sm text-white font-semibold font-rubik text-base w-full transition-all ease-in hover:bg-seagreen">
        Login
      </button>
    </form>
  );
};

export default Form;
