import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import HighlightExtractionCodePage from "./pages/HighlightExtractionCodePage";
import HighlightExtractionPage from "./pages/HighlightExtractionPage";
import DownloadPage from "./pages/DownloadPage";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from the root (/) to /audio-file-upload */}
        <Route path="/" element={<Navigate to="/audio-file-upload" />} />

        <Route path="/audio-file-upload" element={<LandingPage />} />
        <Route path="/highlight-extraction" element={<HighlightExtractionPage />} />
        <Route path="/highlight-extraction-code" element={<HighlightExtractionCodePage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}

export default App;

