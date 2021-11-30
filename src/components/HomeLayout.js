import React from "react";
import "./homeLayout.css";

import Header from "./Header";
import Footer from "./Footer";

const Home = ({ children }) => {
  return (
    <div className="home-container">
      <Header> </Header>
      <div style={{ minHeight: "80vh" }}>
        {children}
        
        </div>
      <Footer />
    </div>
  );
};

export default Home;
