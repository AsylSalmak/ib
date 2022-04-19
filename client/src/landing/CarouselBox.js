import { Carousel } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "semantic-ui-react";

const CarouselBox = () => {
  return (
    <Carousel style={{ width: "100%", padding:'0 0' }}>
      <Carousel.Item  style={{ height: "600px"}}>
        <img
          className="d-flex w-100 h-100 position-absolute top-0 end-0"
          src="https://images.wallpaperscraft.ru/image/single/dengi_dollary_shapka_195868_2560x1440.jpg"
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
          src="https://images.wallpaperscraft.ru/image/single/gorod_ulica_doma_trotuar_58870_1920x1080.jpg"
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
          src="https://images.wallpaperscraft.ru/image/single/skala_deti_art_127199_2560x1080.jpg"
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
          src="https://images.wallpaperscraft.ru/image/single/karta_chertezh_mir_svet_linii_20146_1920x1080.jpg"
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
