import React from "react";
import { Button, Container } from "semantic-ui-react";
import "./index.css";
import CarouselBox from "./CarouselBox";

const Section1 = () => {
  return (
    <section className="section1">
      <div className="section1Conteiner">
        <CarouselBox />
        </div>
    </section>
  );
};
export default Section1;
