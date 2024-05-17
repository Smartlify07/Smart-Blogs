import { useState } from "react";

const FormManager = ({ children, initialValues }) => {
  const [formFields, setFormFields] = useState({
    ...initialValues,
  });

  const handleValueChange = (e) => {
    const { value, name } = e.target;
    setFormFields({
      ...value,
      [name]: value,
    });
  };

  console.log(formFields);

  return children({ formFields, handleValueChange });
};

export default FormManager;
