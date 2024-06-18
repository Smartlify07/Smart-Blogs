import getUrl from "./getUrl";

export const getCurrentUserId = async () => {
  const { currentUserUrl } = getUrl();
  const response = await fetch(currentUserUrl);
  const data = await response.json();
  const { userId } = data;
  return userId;
};
