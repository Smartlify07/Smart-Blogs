export const searchBlogs = (blogs, searchValue) => {
  return blogs.filter((blog) =>
    blog.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
  );
};
