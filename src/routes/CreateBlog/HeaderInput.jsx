const HeaderInput = () => {
  const handleNewLine = () => {
    console.log("New line\n\n");

    return <div className="bg-gray-100 w-5 h-5">New line{"\nt"}</div>;
  };

  return (
    <div className=" lg:w-7/12">
      <input
        onKeyDown={handleNewLine}
        className="border-none py-6 px-3 text-[#333] w-full text-3xl font-playfair  placeholder:text-3xl focus:border-none focus:outline-none placeholder:lg:text-4xl placeholder:font-playfair placeholder:font-semibold tracking-wide lg:text-4xl placeholder:text-gray-300"
        placeholder="Title"
      />
    </div>
  );
};

export default HeaderInput;
