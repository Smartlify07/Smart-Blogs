const fetchBlogPost = async ({ params }) => {
  try {
    const { id } = params;

    const response = await fetch(`http://localhost:4000/blogs/${id}`);

    if (!response.ok) {
      throw Error("Sorry that blog doesn't exist");
    }
    const blogData = await response.json();
    return blogData;
  } catch (error) {
    console.error(error);
  }
};

export default fetchBlogPost;
