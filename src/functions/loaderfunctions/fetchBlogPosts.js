import getUrl from "../getUrl";

const fetchBlogPosts = async () => {
  const { blogUrl } = getUrl();
  const response = await fetch(blogUrl);

  if (!response.ok) {
    throw Error("Failed to fetch blogs" + response.status);
  }
  const blogPosts = await response.json();

  return blogPosts;
};

export default fetchBlogPosts;
