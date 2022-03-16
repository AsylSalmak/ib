import React from "react";
import { Button, Container } from "semantic-ui-react";

const Section2 = () => {
  return (
    <section className="section2">
      <Container>
        <div className="section2-title">
          <h2>Бесплатная мгновенная цифровая карта в подарок!</h2>
          <p>Идеальное решение для онлайн платежей и переводов с повышенной безопасностью.</p>
        </div>
        <div className="section2-box">
          <div className="cardImages"></div>
          <div className="txtCont">
            <div className="section2TxtBox">
              <img src="https://cdn.homebank.kz/assets/icons/home/virtual-usage.svg"></img>
              <div className="section2Text"><h4>На все платежи</h4><p>1% бонусов</p></div>
            </div>
            <div className="section2TxtBox">
              <img src="https://cdn.homebank.kz/assets/icons/home/virtual-currency.svg"></img>
              <div className="section2Text"><h4>Мультивалютность</h4><p>KZT, USD, EUR</p>
            </div>
            </div>
            <div className="section2TxtBox">
              <img src="https://cdn.homebank.kz/assets/icons/home/virtual-free.svg"></img>
              <div className="section2Text"><h4>Обслуживание</h4><p>0 тенге на все года</p>
              </div></div>
          </div>
        </div>
        <div className="section2BtnBox">
       <button className="section2Btn">Подробнее о карте</button></div>
      </Container>
    </section>
  );
};
export default Section2;
