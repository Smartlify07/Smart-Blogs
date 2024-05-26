import getUrl from "../getUrl";

const fetchBlogPost = async ({ params }) => {
  const { blogUrl } = getUrl();
  try {
    const { id } = params;

    const response = await fetch(blogUrl + id);

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
