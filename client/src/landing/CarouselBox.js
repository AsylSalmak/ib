import { Carousel } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "semantic-ui-react";

const CarouselBox = () => {
  return (
    <Carousel style={{ width: "100%", paddingTop:'10px' }} variant='dark'>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-flex w-90 position-absolute top-0 end-0"
          src="https://wapi.bcc.kz/images/19771c70-4719-4f7b-997c-43439a8c3330683%D1%85480_03_2.png"
          alt="First slide"
        />
        <Carousel.Caption
          style={{ top: "30%", right: "700px", position: "absolute" }}
        >
          <h3>Весенний кэшбэк</h3>
          <Button content="Оформить карту" style={{backgroundColor:'#4183c4'}}/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-flex w-90 position-absolute top-0 end-0"
          src="https://wapi.bcc.kz/images/4db1b875-866f-47e1-99c0-4c7bd6e2baebFin_1.png"
          alt="Second slide"
        />
        <Carousel.Caption
          style={{ top: "30%", right: "700px", position: "absolute" }}
        >
          <h3>Финансовую Грамотность</h3>
          <p>Повышайте вместе с нами!</p>
          <Button content="Подробнее" style={{backgroundColor:'#4183c4'}}/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-flex w-90 position-absolute top-0 end-0"
          src="https://wapi.bcc.kz/images/15abbd95-f3cb-4925-9d42-eeb9cfb87217683%D1%85480_9.png"
          alt="Third slide"
        />
        <Carousel.Caption
          style={{ top: "30%", right: "700px", position: "absolute" }}
        >
          <h3>#СилавЕдинстве Примите участие в благотворительном сборе</h3>
          <Button content="Оформить карту" style={{backgroundColor:'#4183c4'}}/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-flex w-90 position-absolute top-0 end-0"
          src="https://wapi.bcc.kz/images/83e3fae0-1156-4281-9e5c-79a6a8217c8a683%D1%85480_05.png"
          alt="Third slide"
        />

        <Carousel.Caption
          style={{ top: "30%", right: "700px", position: "absolute" }}
        >
          <h3>Встречайте весну с Нами</h3>
          <p>Приз: умная колонка Яндекс.Станция</p>
          <Button content="Подробнее" style={{backgroundColor:'#4183c4'}}/>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "500px" }}>
        <img
          className="d-flex w-90 position-absolute top-0 end-0"
          src="https://wapi.bcc.kz/images/e4f4b5cd-7d19-49c7-8e0c-84077d0815453.png"
          alt="Third slide"
        />

        <Carousel.Caption
          style={{ top: "30%", right: "700px", position: "absolute" }}
        >
          <h3>Ипотека</h3>
          <p>Получите предварительное одобрение не выходя из дома</p>
          <Button content="Подробнее" style={{backgroundColor:'#4183c4'}}/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselBox;
