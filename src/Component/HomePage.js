import React from "react";
import Animation from "./Animation";
import "./HomePage.css";
import LeftPart from "./LeftPart";

const HomePage = () => {
  return (
    <div className="main-box">
      <LeftPart />
      <Animation />
    </div>
  );
};

export default HomePage;
