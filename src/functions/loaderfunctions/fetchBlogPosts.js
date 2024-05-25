const fetchBlogPosts = async () => {
  try {
    const response = await fetch("http://localhost:4000/blogs");

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
