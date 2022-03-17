import { Carousel } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "semantic-ui-react";

const CarouselBox = () => {
  return (
    <Carousel style={{ width: "100%", padding:'50px 0' }} variant="dark">
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-flex w-100 h-100 position-absolute top-0 end-0"
          src="https://tengebank.uz/storage/app/uploads/public/61f/cc8/725/61fcc87258772701082524.png"
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
            }}
          />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-flex w-100 h-100 position-absolute top-0 end-0"
          src="https://tengebank.uz/storage/app/uploads/public/622/1de/744/6221de7442423445017143.png"
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
            }}
          />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-flex w-100 h-100 position-absolute top-0 end-0"
          src="https://tengebank.uz/storage/app/uploads/public/60b/0c8/f25/60b0c8f253e6b492552034.png"
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
            }}
          />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-flex w-100 h-100 position-absolute top-0 end-0"
          src="https://tengebank.uz/storage/app/uploads/public/620/ba0/0c3/620ba00c36045761246217.png"
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
            }}
          />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselBox;
