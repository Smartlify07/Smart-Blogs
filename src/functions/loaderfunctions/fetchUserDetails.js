import getUrl from "../getUrl";

const fetchUserDetails = async () => {
  const { userProfileUrl, currentUserUrl } = getUrl();
  const currentUserResponse = await fetch(currentUserUrl);
  const { userId } = await currentUserResponse.json();
  console.log(userId);
  const response = await fetch(userProfileUrl + userId);

  if (!response.ok) {
    throw Error("Couldn't fetch user profile");
  }
  const details = await response.json();
  console.log(details);

  return details;
};

export default fetchUserDetails;
