import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Metadata } from "next";

// either Static metadata
export const metadata: Metadata = {
  description: "Psikolog Cansu Yırtar",
  authors: { name: "Mesut Çağa" },
  keywords: [
    "psikolog",
    "terapi",
    "sağlık",
    "psikanalitik",
    "psikoterapi",
    "online terapi",
    "çocuk-aile terapisi",
    "çift terapisi",
  ],
};

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
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
export default Layout;
