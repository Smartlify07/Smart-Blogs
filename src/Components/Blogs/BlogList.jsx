import { useLoaderData } from "react-router-dom";
import { Suspense, lazy } from "react";
const BlogPost = lazy(() => import("./Blog"));

const BlogList = () => {
  const blogPosts = useLoaderData();
  console.log(blogPosts);
  return (
    <section className="flex px-3 flex-col gap-10 lg:px-10 lg:w-8/12">
      {blogPosts.map((item) => (
        <Suspense
          key={item.id}
          fallback={
            <div className="bg-gray-100 w-full h-[400px] rounded-lg"></div>
          }
        >
          <BlogPost {...item} />
        </Suspense>
      ))}
    </section>
  );
};

export default BlogList;
