const fetchUserDetails = async () => {
  const response = await fetch("http://localhost:4000/profile");

  if (!response.ok) {
    throw Error("Couldn't fetch user profile");
  }
  const details = await response.json();

  return details;
};

export default fetchUserDetails;
