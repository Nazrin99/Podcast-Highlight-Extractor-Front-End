import React from "react";
import CircularButton from "./CircularButton";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface CodeDisplayFieldProps {
  code: string;
}

const CodeDisplayField = ({ code }: CodeDisplayFieldProps) => {
  const navigate = useNavigate();

   const onCopyButtonClick = () => {
    const input = document.createElement("input");
    document.body.appendChild(input);
    input.value = code;
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);

    // Send a HTTP POST request to /generate-highlight/:code endpoint
    fetch(`http://localhost:5000/generate-highlight/${code}`, {
      method: "POST",
    });

    navigate("/download");
  };

  return (
    <div className="code-display-field">
      <div className="code-horizontal-container">
        <h4>{code}</h4>
        <CircularButton
          isDownload={false}
          onClick={onCopyButtonClick}
        ></CircularButton>
      </div>
    </div>
  );
};

export default CodeDisplayField;
