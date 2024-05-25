import { useState } from "react";

const ContentEditor = () => {
  const [text, setText] = useState("");
  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      console.log("New line\n\n");
      event.preventDefault();

      const { selectionStart, selectionEnd } = event.target;
      const newText =
        text.substring(0, selectionStart) +
        "\n\n\n" +
        text.substring(selectionEnd); // Add three new lines when enter is pressed

      console.log(newText);
      setText(newText);
      setTimeout(() => {
        event.target.selectionStart = event.target.selectionEnd =
          selectionStart + 2; // Make sure the cursor starts from the second new line.
      }, 0);

      console.log(selectionEnd, selectionStart);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <textarea
      rows={"10"}
      className="w-9/12 border  focus:outline-none  overflow-hidden "
      placeholder="Your story..."
      onKeyDown={handleEnter}
      onChange={handleChange}
      value={text}
    ></textarea>
  );
};

export default ContentEditor;
