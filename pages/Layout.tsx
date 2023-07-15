import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Head from "next/head";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <div>
        <Head>
          <title>Psikolog Cansu Yırtar</title>
          <meta
            name="description"
            content="Psikolog Cansu Yırtar ile Psikanalitik, Psikoterapi ve daha fazlası."
            key="desc"
          />
          <meta name="authors" content="Mesut Çağa" key="author" />
          <meta name="google" content="notranslate" key="notranslate" />
          <meta
            name="keywords"
            content="psikolog, terapi, sağlık, psikanalitik, psikoterapi, online terapi, çocuk-aile terapisi, çift terapisi"
            key="keys"
          />
        </Head>
      </div>
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
