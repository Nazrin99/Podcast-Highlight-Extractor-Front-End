import React from "react";
import copy from "../assets/copy.png";
import download from "../assets/download.png";
import { useNavigate } from "react-router-dom";

interface CircularButtonProps {
  isDownload: boolean;
  onClick?: () => void;
}

const CircularButton = ({ isDownload, onClick }: CircularButtonProps) => {
  const navigate = useNavigate();

  return (
    <div className="circular-button" onClick={() => {}}>
      {isDownload ? (
        <img src={download} className="button-image" onClick={onClick}></img>
      ) : (
        <img src={copy} className="button-image" onClick={onClick}></img>
      )}
    </div>
  );
};

export default CircularButton;
