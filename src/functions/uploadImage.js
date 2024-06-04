export const uploadImage = async (imageSrc, cloudinaryImagesUrl) => {
  const formData = new FormData();
  formData.append("file", imageSrc);
  formData.append("upload_preset", "dylxjcob");

  const response = await fetch(cloudinaryImagesUrl, {
    method: "POST",
    body: formData,
  });

  console.log(imageSrc);

  const data = await response.json();
  return data.url;
};
