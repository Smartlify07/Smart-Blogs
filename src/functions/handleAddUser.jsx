export const handleSignUp = async ({ name, email }) => {
  const dataToUpdate = {
    name: name,
    email: email,
  };
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(dataToUpdate),
  };
  const response = await fetch("http://localhost:4000/profile", requestOptions);
  const data = await response.json();
  console.log(data);
};
