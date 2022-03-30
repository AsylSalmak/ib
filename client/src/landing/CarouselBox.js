import { Carousel } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "semantic-ui-react";

const CarouselBox = () => {
  return (
    <Carousel style={{ width: "100%", padding:'0 0' }}>
      <Carousel.Item  style={{ height: "600px" }}>
        <img
          className="d-flex w-100 h-100 position-absolute top-0 end-0"
          src="https://aif-s3.aif.ru/images/026/628/20a6f5a3807dd797b788b2a5088be666.jpg"
          alt="First slide"
        />
        <Carousel.Caption
          style={{
            width: "300px",
            height: "100%",
            left: "195px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "40px",
          }}
        >
          <h3>Откройте Депозит</h3>
          <Button
            content="Подробнее"
            style={{
              backgroundColor: "#4a9aeb",
              borderRadius: "7px",
              width: "150px",
              height: "50px",
              marginTop: "20px",
              color:'#fff'
            }}
          />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "600px" }}>
        <img
          className="d-flex w-100 h-100 position-absolute top-0 end-0"
          src="https://avatars.mds.yandex.net/get-zen_doc/3737694/pub_61c97f66c2b8ed4a1a5c5fc0_61c9805defcf5a414d7c3f4c/scale_2400"
          alt="Second slide"
        />
        <Carousel.Caption
          style={{
            width: "300px",
            height: "100%",
            left: "195px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "40px",
          }}
        >
          <h3>Ипотека на вторичное жилье</h3>
          <Button
            content="Подробнее"
            style={{
              backgroundColor: "#4a9aeb",
              borderRadius: "7px",
              width: "150px",
              height: "50px",
              marginTop: "20px",
              color:'#fff'
            }}
          />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "600px" }}>
        <img
          className="d-flex w-100 h-100 position-absolute top-0 end-0"
          src="https://www.westernalliancebancorporation.com/-/media/images/bank-of-nevada/home/bon-hero-carousel-accountability.jpg"
          alt=" slide"
        />
        <Carousel.Caption
          style={{
            width: "300px",
            height: "100%",
            left: "195px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "40px",
          }}
        >
          <h3>Дети учатся быть взрослыми!</h3>
          <Button
            content="Подробнее"
            style={{
              backgroundColor: "#4a9aeb",
              borderRadius: "7px",
              width: "150px",
              height: "50px",
              marginTop: "20px",
              color:'#fff'
            }}
          />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "600px" }}>
        <img
          className="d-flex w-100 h-100 position-absolute top-0 end-0"
          src="https://www.westernalliancebancorporation.com/-/media/images/bank-division-pages_shared/home/bank-on-accountability-heroes/econ-forum-2021-hero.jpg"
          alt=" slide"
        />
        <Carousel.Caption
          style={{
            width: "300px",
            height: "100%",
            left: "195px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "40px",
          }}
        >
          <h3>Переводы по миру</h3>
          <Button
            content="Подробнее"
            style={{
              backgroundColor: "#4a9aeb",
              borderRadius: "7px",
              width: "150px",
              height: "50px",
              marginTop: "20px",
              color:'#fff'
            }}
          />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselBox;
