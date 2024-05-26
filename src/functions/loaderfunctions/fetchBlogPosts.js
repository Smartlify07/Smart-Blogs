import getUrl from "../getUrl";

const fetchBlogPosts = async () => {
  const { blogUrl } = getUrl();
  try {
    const response = await fetch(blogUrl);

    if (!response.ok) {
      throw Error("Couldn't fetch user profile");
    }
    const blogPosts = await response.json();

    return blogPosts;
  } catch (error) {
    console.error(error);
  }
};

export default fetchBlogPosts;
