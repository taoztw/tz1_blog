import Navbar from "@/components/navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </section>
    </main>
  );
};

export default Layout;
