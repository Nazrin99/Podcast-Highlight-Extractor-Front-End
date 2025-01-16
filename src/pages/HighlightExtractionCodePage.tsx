import React from "react";
import TopBar from "../components/TopBar";
import PageHeader from "../components/PageHeader";
import CodeDisplayField from "../components/CodeDisplayField";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const HighlightExtractionCodePage = () => {
  const [searchParams] = useSearchParams();
  let code = searchParams.get("code") || "";

  useEffect(() => {}, [code]);

  return (
    <div style={{ alignContent: "center", alignItems: "center" }}>
      <TopBar></TopBar>
      <PageHeader
        headerText="Extracting Highlights ⏳"
        headerDesc="We’re currently extracting highlights for you, please come back in 10 minutes. In the mean time, hold on to the code below to claim your highlights"
      ></PageHeader>
      <CodeDisplayField code={code}></CodeDisplayField>
    </div>
  );
};

export default HighlightExtractionCodePage;
