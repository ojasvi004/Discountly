import React, { ReactNode } from "react";
import { NavBar } from "./_components/NavBar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white min-h-screen">
      <NavBar />
      <div className="container py-6">{children}</div>
    </div>
  );
};

export default DashboardLayout;
