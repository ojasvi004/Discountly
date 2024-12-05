import React, { ReactNode } from "react";
import { NavBar } from "./_components/NavBar";
const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="selection:bg-indigo-200/80">
      <NavBar />
      {children}
    </div>
  );
};

export default MarketingLayout;
