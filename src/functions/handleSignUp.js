import getUrl from "./getUrl";

export const handleSignUp = async ({ name, email }) => {
  const { userProfileUrl } = getUrl();
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
  const response = await fetch(userProfileUrl, requestOptions);

  if (!response.ok) {
    throw new Error("A problem occurred with that action " + response.status);
  }
};
