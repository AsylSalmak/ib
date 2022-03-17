import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import './index.css';

const Landing = () => {
  return (
    <div className="landing-page">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Landing;
