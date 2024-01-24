import React from "react";
import NavigationBar from "./Navbar";
import Image from "next/image";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full">
      <NavigationBar />
      <div className="container-fluid md:container px-unit-20">{children}</div>
    </main>
  );
}

export default MainLayout;
