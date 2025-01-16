import React from "react";
import Button from "./Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface UploadButtonProps {
  buttonText: string;
}

const UploadButton = ({ buttonText }: UploadButtonProps) => {
  const inputFile = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleClick = () => {
    inputFile?.current?.click();
  };

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];

    const blob = new Blob([selectedFile], { type: selectedFile.type });

    const blobUrl = URL.createObjectURL(blob);

    if (selectedFile) {
      const filePath = selectedFile.name;

      // Create an audio element to get the duration
      const audioElement = document.createElement("audio");
      audioElement.src = URL.createObjectURL(selectedFile);

      // Event listener for when the metadata is loaded
      audioElement.addEventListener("loadedmetadata", () => {
        const duration = audioElement.duration;
        console.log("Filename:", filePath);
        console.log("Duration:", audioElement);
        navigate(
          `/highlight-extraction?file-name=${filePath}&duration=${duration}&blob-url=${blobUrl}`
        );
      });
    }
  };

  return (
    <div>
      <Button buttonText={buttonText} onClick={handleClick}></Button>
      <input
        type="file"
        ref={inputFile}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept=".mp3,.wav"
      />
    </div>
  );
};

export default UploadButton;
