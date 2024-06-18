/* eslint-disable react/prop-types */
import { useField } from "formik";
import { BsExclamationCircle } from "react-icons/bs";

const TextInput = ({ label, ...props }) => {
  const [fields, meta] = useField(props);
  return (
    <div className="flex flex-col gap-1 font-rubik">
      <label
        className="text-sm text-pakistangreen"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>

      <input
        className={`px-4 py-3 rounded-sm border border-gray-200 ${
          meta.touched && meta.error && "border-red-500 "
        } focus:outline-none lg:py-3 lg:placeholder:text-sm lg:text-sm`}
        {...fields}
        {...props}
      />

      {meta.touched && meta.error && (
        <p className="text-xs font-semibold text-red-500 flex gap-1 items-center">
          <BsExclamationCircle className="text-xs inline" />
          <span>{meta.error}</span>
        </p>
      )}
    </div>
  );
};

export default TextInput;
