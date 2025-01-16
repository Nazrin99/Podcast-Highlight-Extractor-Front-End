import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TopBar from "./components/TopBar";
import "../src/styles/header.css";
import PageHeader from "./components/PageHeader";
import LandingPage from "./pages/LandingPage";
import "../src/styles/pageheader.css";
import "../src/styles/button.css";
import "../src/styles/highlightextractionpage.css";
import "../src/styles/landingpage.css";
import "../src/styles/codefield.css";
import "../src/styles/circularbutton.css";
import HighlightExtractionPage from "./pages/HighlightExtractionPage";
import HighlightExtractionCodePage from "./pages/HighlightExtractionCodePage";
import DownloadPage from "./pages/DownloadPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
