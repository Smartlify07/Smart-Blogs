import getUrl from "../getUrl";

const fetchUserDetails = async () => {
  const { userProfileUrl } = getUrl();
  const response = await fetch(userProfileUrl);

  if (!response.ok) {
    throw Error("Couldn't fetch user profile");
  }
  const details = await response.json();

  return details;
};

export default fetchUserDetails;
