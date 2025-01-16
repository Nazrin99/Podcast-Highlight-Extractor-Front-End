import React from "react";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/audio-file-upload');
  };

  return (
    <div className="top-bar" onClick={handleClick}>
      <h1 className="top-bar-text">Podcast Highlight Extractor</h1>
    </div>
  );
};

export default Header;