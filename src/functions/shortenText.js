// Shorten the text seen in the blogs page

const shortenText = (text) => {
  return text.split("").slice(0, 250).join("");
};

export default shortenText;
