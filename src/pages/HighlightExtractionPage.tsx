import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import Button from "../components/Button";
import audiopng from "../assets/audio.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import { blob } from "stream/consumers";

interface HighlightExtractionPageProps {
  duration: string;
  fileName: string;
}

const HighlightExtractionPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fileName = searchParams.get("file-name") || "";
  const duration = searchParams.get("duration") || "";
  const blobUrl = searchParams.get("blob-url") || "";

  const goToHighlightExtractionCode = () => {
    sendAudioFile(blobUrl);
  };

  const sendAudioFile = async (blobUrl: string) => {
    try {
      // Fetch Blob data
      const response1 = await fetch(blobUrl);
      const blobData = await response1.blob();

      // Create FormData object
      const formData = new FormData();
      formData.append("audio_file", blobData, "audio.mp3");

      // Send FormData via POST request
      const response2 = await fetch("http://127.0.0.1:5000/create", {
        method: "POST",
        body: formData,
      });

      // Parse response JSON
      const data = await response2.json();

      // Extract autogenerated key
      const code = data["autogenerated_key"];

      navigate(`/highlight-extraction-code?code=${code}`);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return (
    <div className="highlight-extraction-page">
      <TopBar></TopBar>
      <div className="base-canvas">
        <div className="left-section">
          <img src={audiopng} alt="My SVG" className="my-svg-image" />
          <h4>{fileName}</h4>
        </div>
        <div className="right-section">
          <h4>Duration : {formatSeconds(parseFloat(duration))}</h4>
          <Button
            buttonText="Extract Highlights"
            onClick={goToHighlightExtractionCode}
          ></Button>
        </div>
      </div>
    </div>
  );
};

const formatSeconds = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedHours = hours > 0 ? `${hours} hr` : "";
  const formattedMinutes = minutes > 0 ? `${minutes} mins` : "";
  const formattedSeconds =
    remainingSeconds > 0 ? `${remainingSeconds} secs` : "";

  const parts = [formattedHours, formattedMinutes, formattedSeconds];
  return parts.filter((part) => part !== "").join(" ");
};

export default HighlightExtractionPage;
