/* eslint-disable react/prop-types */

const ContentEditor = ({ bodyText, setBodyText }) => {
  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      event.preventDefault();

      const { selectionStart, selectionEnd } = event.target;
      const newText =
        bodyText.substring(0, selectionStart) +
        "\n\n" +
        bodyText.substring(selectionEnd); // Add three new lines when enter is pressed

      setBodyText(newText);
      setTimeout(() => {
        event.target.selectionStart = event.target.selectionEnd =
          selectionStart + 2; // Make sure the cursor starts from the second new line.
      }, 0);
    }
  };

  const handleChange = (e) => {
    setBodyText(e.target.value);
  };

  return (
    <textarea
      rows={"10"}
      className=" overflow-hidden py-4 px-4 border-none text-lg resize-none focus:outline-none focus:border-none placeholder:text-xl lg:w-7/12"
      placeholder="Your story..."
      onKeyDown={handleEnter}
      onChange={handleChange}
      value={bodyText}
    ></textarea>
  );
};

export default ContentEditor;
