import { generateUID } from "./generateUID";
import getUrl from "./getUrl";
import updateCurrentUser from "./updateCurrentUser";

export const handleSignUp = async ({ name, email }) => {
  try {
    const userId = generateUID();
    const { userProfileUrl } = getUrl();
    const userProfile = {
      name: name,
      email: email,
      id: userId,
      bio: "",
      userProfileImage: "",
      posts: [],
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(userProfile),
    };
    await updateCurrentUser(userId);

    console.log(userProfile);

    const response = await fetch(userProfileUrl, requestOptions);

    if (!response.ok) {
      throw new Error("A problem occurred with that action " + response.status);
    }
  } catch (error) {
    console.error(error);
  }
};
