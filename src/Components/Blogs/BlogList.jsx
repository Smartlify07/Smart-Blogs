import { useLoaderData } from "react-router-dom";
import { Suspense, lazy } from "react";
import useSearchValues from "../../hooks/useSearchValues";
import { searchBlogs } from "../../functions/searchBlogs";
const BlogPost = lazy(() => import("./Blog"));

const BlogList = () => {
  const blogPosts = useLoaderData();
  const { searchValue } = useSearchValues();
  const filteredBlogs = searchBlogs(blogPosts, searchValue);

  return (
    <section className="flex px-3 flex-col gap-10 lg:px-10 lg:w-8/12">
      {!searchValue &&
        blogPosts.map((item) => (
          <Suspense
            key={item.id}
            fallback={
              <div className="bg-gray-100 w-full h-[400px] rounded-lg"></div>
            }
          >
            <BlogPost {...item} />
          </Suspense>
        ))}

      {searchValue &&
        filteredBlogs.map((item) => (
          <Suspense
            key={item.id}
            fallback={
              <div className="bg-gray-100 w-full h-[400px] rounded-lg"></div>
            }
          >
            <BlogPost {...item} />
          </Suspense>
        ))}

      {searchValue && filteredBlogs.length === 0 && (
        <h1 className="text-4xl">No blogs found</h1>
      )}
    </section>
  );
};

export default BlogList;
