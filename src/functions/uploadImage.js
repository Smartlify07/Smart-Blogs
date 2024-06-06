export const uploadImage = async (imageSrc, cloudinaryImagesUrl) => {
  const formData = new FormData();
  formData.append("file", imageSrc);
  formData.append("upload_preset", "dylxjcob");

  const response = await fetch(cloudinaryImagesUrl, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload failed" + response.status);
  }

  const data = await response.json();
  console.log(data);

  return data.url;
};
