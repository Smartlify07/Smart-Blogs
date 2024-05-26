import { useState } from "react";
import ContentEditor from "./ContentEditor";
import CreateBlogNavbar from "./CreateBlogNavbar";
import HeaderInput from "./HeaderInput";
import AddImage from "./AddImage";

const CreateBlog = () => {
  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [blogImage, setBlogImage] = useState();

  return (
    <>
      <CreateBlogNavbar
        postTitle={headerText}
        postBody={bodyText}
        blogCoverImage={blogImage}
      />
      <section className="bg-white flex flex-col py-10 px-10 gap-4 lg:px-0 lg:items-center ">
        <HeaderInput headerText={headerText} setHeaderText={setHeaderText} />

        <ContentEditor bodyText={bodyText} setBodyText={setBodyText} />
        <AddImage blogImage={blogImage} setBlogImage={setBlogImage} />
      </section>
    </>
  );
};

export default CreateBlog;
