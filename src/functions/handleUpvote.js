import getUrl from "./getUrl";
export const handleUpvote = async (id, setUpdatedUpvotes) => {
  try {
    const { blogUrl } = getUrl();

    const response = await fetch(blogUrl + id);

    const blogDetailsData = await response.json();
    const { upvotes } = blogDetailsData;

    console.log(upvotes);

    let initialUpvotes = upvotes;

    const updatedUpvotes = initialUpvotes + 1;

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        upvotes: updatedUpvotes,
      }),
    };

    const upvotesResponse = await fetch(blogUrl + id, requestOptions);
    if (!response.ok) {
      throw new Error("Couldn't process such request" + response.status);
    } else {
      setUpdatedUpvotes(updatedUpvotes);
      console.log(await upvotesResponse.json());
    }
  } catch (error) {
    console.error(error);
  }
};
