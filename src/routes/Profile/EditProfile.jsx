import { useState } from "react";
import useUserDetails from "../../hooks/useUserDetails";

const EditProfile = () => {
  const { userName, isLoading } = useUserDetails();
  console.log(isLoading, userName);
  const [formData, setFormData] = useState({
    name: isLoading ? "o" : userName.toString(),
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  return (
    <section className="py-10 flex font-rubik justify-center items-center">
      <div className="w-[400px] flex flex-col gap-3 bg-[#fbfbfb] shadow-lg py-10 px-7">
        <h2 className="text-xl font-semibold text-black text-center">
          Profile Information
        </h2>

        <div className="flex items-center  gap-5">
          <div className="flex flex-col gap-1 items-center">
            <p className="text-[#555] mt-4">Photo</p>

            <div className="w-16 h-16 rounded-full bg-malachite text-white flex items-center justify-center">
              <h1 className="text-2xl font-semibold">A</h1>
            </div>
          </div>

          <div className="flex-col gap-8 mt-5 h-full">
            <div className="flex items-center gap-4">
              <button className="text-seagreen">Update</button>
              <button className="text-red-500">Remove</button>
            </div>
            <p className="text-sm  text-[#444]">
              Upload a clear image of yourself
            </p>
          </div>
        </div>

        <form className="flex flex-col mt-5">
          <label htmlFor="Name" className="text-[#555] text-lg mb-4">
            Name*
          </label>

          <input
            type="text"
            className="border rounded-sm py-3 px-3 focus:border focus:outline-none"
            placeholder="Name"
            value={formData.name}
            name="name"
            onChange={handleChange}
          />

          <label htmlFor="Name" className="mt-4 text-[#555] text-lg mb-2">
            Bio
          </label>

          <input
            type="text"
            className="border rounded-sm py-3 px-3 focus:border focus:outline-none"
            placeholder="Bio"
            value={formData.bio}
            name="bio"
            onChange={handleChange}
          />
        </form>

        <div className="flex items-center w-full gap-4  mt-5 justify-end">
          <button className="rounded-2xl px-6 text-sm py-2 border border-seagreen hover:bg-pakistangreen hover:text-white transition-all">
            Cancel
          </button>
          <button className="rounded-2xl px-6 text-sm py-2 bg-seagreen text-white hover:bg-pakistangreen transition-all">
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
