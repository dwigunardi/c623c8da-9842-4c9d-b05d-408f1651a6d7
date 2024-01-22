import React from "react";
import NavigationBar from "./Navbar";
import Image from "next/image";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="">
      <NavigationBar />
      {children}
      
    </main>
  );
}

export default MainLayout;
