import getUrl from "./getUrl";

const updateCurrentUser = async (id) => {
  const { currentUserUrl } = getUrl();
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      userId: id,
    }),
  };
  const response = await fetch(currentUserUrl, requestOptions);
  if (!response.ok) {
    throw new Error("Couldn't make such request" + response.status);
  }

  return id;
};

export default updateCurrentUser;
