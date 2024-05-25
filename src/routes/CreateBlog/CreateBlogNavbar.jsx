import Button from "../../Components/Button";

const CreateBlogNavbar = () => {
  return (
    <nav className="py-10 px-10 font-rubik lg:py-6">
      <div className="flex items-center justify-between lg:justify-around">
        <h1 className="text-black text-xl lg:text-2xl font-semibold font-rubik">
          <span className="text-malachite">Smart</span>blogs
        </h1>

        <div className="flex items-center gap-5">
          <Button value="Publish" />
        </div>
      </div>
    </nav>
  );
};

export default CreateBlogNavbar;
