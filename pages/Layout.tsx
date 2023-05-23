import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="main-content">
        <Navbar />
        <main>{children}</main>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};
