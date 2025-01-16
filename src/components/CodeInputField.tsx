import React from "react";
import CircularButton from "./CircularButton";
import { on } from "events";
import { useState } from "react";

const CodeInputField = () => {
  const onDownloadButtonClick = () => {
    downloadFile(inputValue);
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const downloadFile = async (code: string) => {
    const url = `http://localhost:5000/download/${code}`;
    try {
      const response = await fetch(url);
      // Check the headers to determine the content type
      const contentType = response.headers.get("content-type");
      // If the response is not an audio file, display an error message
      if (contentType !== "audio/mpeg") {
        const data = await response.json(); // or response.json() if the response is JSON
        console.log(data);

        // If response code is 404, extract the error message and display it
        if (response.status === 404) {
          alert(data["error"]);
          return;
        }
        return;
      }
      
      const a = document.createElement("a");
      a.href = url;
      a.download = `highlight_${code}.mp3`; // This can be customized as needed
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error fetching the file:', error);
    }
  };

  return (
    <div className="code-input-field">
      <div className="code-horizontal-container">
        <input
          type="text"
          placeholder="Insert your code here"
          value={inputValue}
          onChange={handleInputChange}
        />
        <CircularButton
          isDownload={true}
          onClick={onDownloadButtonClick}
        ></CircularButton>
      </div>
    </div>
  );
};

export default CodeInputField;
