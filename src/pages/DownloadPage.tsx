import React from "react";
import TopBar from "../components/TopBar";
import PageHeader from "../components/PageHeader";
import CodeInputField from "../components/CodeInputField";

const DownloadPage = () => {
  return (
    <div style={{ alignContent: "center", alignItems: "center" }}>
      <TopBar></TopBar>
      <PageHeader
        headerText="Downloading Highlights 🗃️"
        headerDesc="Insert your code below to download your highlights. Once downloaded, the highlight will be deleted from our database, else we will store it for a maximum of 3 days 😀"
      ></PageHeader>
      <CodeInputField />
    </div>
  );
};

export default DownloadPage;
