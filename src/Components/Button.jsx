/* eslint-disable react/prop-types */
const Button = ({ handleSubmit, value }) => {
  return (
    <button
      onClick={handleSubmit}
      className={`bg-malachite px-7 py-3 rounded-sm text-white font-semibold font-rubik text-base w-full transition-all ease-in hover:bg-seagreen`}
    >
      {value}
    </button>
  );
};

export default Button;
