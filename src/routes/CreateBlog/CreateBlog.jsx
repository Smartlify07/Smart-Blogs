import ContentEditor from "./ContentEditor";
import CreateBlogNavbar from "./CreateBlogNavbar";
import HeaderInput from "./HeaderInput";

const CreateBlog = () => {
  return (
    <>
      <CreateBlogNavbar />
      <section className="bg-white flex flex-col px-10 lg:px-0 lg:items-center ">
        <HeaderInput />
        <ContentEditor />
      </section>
    </>
  );
};

export default CreateBlog;
