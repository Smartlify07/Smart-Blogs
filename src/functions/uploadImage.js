export const uploadImage = async (
  blogImage,
  cloudinaryImagesUrl,
  setBlogImage
) => {
  const formData = new FormData();
  formData.append("file", blogImage);
  formData.append("upload_preset", "dylxjcob");

  const response = await fetch(cloudinaryImagesUrl, {
    method: "POST",
    body: formData,
  });

  console.log(blogImage);

  const data = await response.json();
  console.log(data);
  setBlogImage(data.url);
};
