import getUrl from "./getUrl";
export const editProfile = async (name, bio, imageSrc) => {
  const { userProfileUrl, currentUserUrl } = getUrl();
  const currentUserResponse = await fetch(currentUserUrl);
  const { userId } = await currentUserResponse.json();

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      bio: bio,
      userProfileImage: imageSrc,
      id: userId,
      posts: [],
    }),
  };

  const response = await fetch(userProfileUrl + userId, requestOptions);

  if (!response.ok) {
    throw new Error("A problem occurred with that action " + response.status);
  }
};
