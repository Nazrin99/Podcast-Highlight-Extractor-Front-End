import React from "react";
import TopBar from "../components/TopBar";
import PageHeader from "../components/PageHeader";
import UploadButton from "../components/UploadButton";

const LandingPage = () => {
  return (
    <div style={{ alignContent: "center", alignItems: "center" }}>
      <TopBar></TopBar>
      <PageHeader
        headerText="Extracting Highlight from Podcasts"
        headerDesc="Upload your favourite podcasts files here and we’ll create highlights for you!"
      ></PageHeader>
      <UploadButton buttonText="Upload Files"></UploadButton>
      <h5>
        We only accept .mp3 and .wav files with maximum file size of 150 MB
      </h5>
    </div>
  );
};

export default LandingPage;
