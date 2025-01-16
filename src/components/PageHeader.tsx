import React from "react";

interface PageHeaderProps {
  headerText: string;
  headerDesc: string;
}

const PageHeader = ({ headerText, headerDesc }: PageHeaderProps) => {
  return (
    <div>
      <h2 className="header-text">{headerText}</h2>
      <h4 className="header-desc">{headerDesc}</h4>
    </div>
  );
};

export default PageHeader;
