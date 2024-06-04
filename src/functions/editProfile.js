import getUrl from "./getUrl";
export const editProfile = async (name, bio, imageSrc) => {
  const { userProfileUrl } = getUrl();

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      bio: bio,
      userProfileImage: imageSrc,
    }),
  };

  const response = await fetch(userProfileUrl, requestOptions);

  if (!response.ok) {
    throw new Error("A problem occurred with that action " + response.status);
  }
  const data = await response.json();

  console.log(data);
};
