import { deleteUserPost } from "./deleteUserPost";
import getUrl from "./getUrl";

export const deletePost = async (id, navigate) => {
  try {
    const { blogUrl } = getUrl();
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await fetch(blogUrl + id, requestOptions);

    if (response.ok) {
      console.log("Successfully deleted");
      navigate("/dashboard");
      await deleteUserPost(id);
      window.location.reload();
    } else {
      console.error(response.status);
      console.error("Delete failed with status" + response.status);
    }
  } catch (error) {
    console.error(error);
  }
};
