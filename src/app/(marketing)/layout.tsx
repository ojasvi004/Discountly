import React, { ReactNode } from "react";
import { NavBar } from "./_components/NavBar";
const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="selection:bg-pink-200">
      <NavBar />
      {children}
    </div>
  );
};

export default MarketingLayout;
