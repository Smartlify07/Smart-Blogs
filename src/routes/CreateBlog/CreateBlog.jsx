import { useState } from "react";
import ContentEditor from "./ContentEditor";
import CreateBlogNavbar from "./CreateBlogNavbar";
import HeaderInput from "./HeaderInput";
import FilePicker from "../../Components/FilePicker";

const CreateBlog = () => {
  const [headerText, setHeaderText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [blogImage, setBlogImage] = useState();

  console.log(blogImage);

  return (
    <>
      <CreateBlogNavbar
        postTitle={headerText}
        postBody={bodyText}
        blogCoverImage={blogImage}
      />
      <section
        className={` bg-white flex flex-col py-10 px-10 gap-10 relative lg:px-10 lg:items-center `}
      >
        <HeaderInput headerText={headerText} setHeaderText={setHeaderText} />
        {blogImage && <img src={blogImage} className="w-7/12" />}

        <FilePicker setImgSrc={setBlogImage} positioned={false} />
        <ContentEditor bodyText={bodyText} setBodyText={setBodyText} />
      </section>
    </>
  );
};

export default CreateBlog;
