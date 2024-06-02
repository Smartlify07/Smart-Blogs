/* eslint-disable react/prop-types */
const HeaderInput = ({ headerText, setHeaderText }) => {
  const handleChange = (e) => {
    setHeaderText(e.target.value);
  };
  return (
    <div className=" lg:w-7/12">
      <input
        className="border-none py-6 px-3 text-[#333] w-full text-3xl font-playfair  placeholder:text-3xl focus:border-none focus:outline-none placeholder:lg:text-4xl placeholder:font-playfair placeholder:font-semibold tracking-wide lg:text-4xl placeholder:text-gray-300"
        placeholder="Title"
        onChange={handleChange}
        value={headerText}
      />
    </div>
  );
};

export default HeaderInput;
