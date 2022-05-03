import React, { useState, useEffect } from "react";
import { Checkbox, Container, Input } from "semantic-ui-react";
import { formatToCurrencyNumber } from "../helpers/numbers";
import "./index.css";

const Section4 = () => {
  const [term, setTerm] = useState(0);
  const [amount, setAmount] = useState(60000);
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [interestRate, setInteresRate] = useState("");
  const [calculatorChekBox, setCalculatorChekBox] = useState(false);
  useEffect(() => {

    let rate =
      term <= 6
        ? 6
        : term > 6 && term <= 18
        ? 14
        : term > 18 && term <= 36
        ? 20.4
        : 21.6;
    rate = calculatorChekBox? rate-2: rate
    setInteresRate(rate);

    
    let calculatorResault =
      (amount >= 60000 && amount <= 7000000) && term
        ? ((amount * rate) / 100 + amount) / term
        : null;
    setMonthlyPayment(Math.round(calculatorResault));
  }, [term, amount, interestRate, calculatorChekBox]);

  return (
    <div className="Section4">
      <Container>
        <div className="Section4Content">
          <div className="Section4-title">
            <h2>Кредитный калькулятор</h2>
          </div>
          <div className="section4-box">
            <div className="calculator-box">
              <div className="calculator-amount-box">
                <div className="calculator-amount-box-input">
                  <Input
                    style={{ width: "75%" }}
                    color="teal"
                    icon="money bill alternate outline"
                    iconPosition="left"
                    value={amount}
                    onChange={(e) => {
                      let value = e.target.value;
                      value = +value.replace(/[^0-9.]/g, "");
                      // value = value.replace(/(\d)(\d{2})$/, "$1. $2")
                      setAmount(value);
                    }}
                  />
                  <label>Выберите сумму</label>
                </div>
                <input
                  type="range"
                  min="60000"
                  max="7000000"
                  step="10000"
                  value={amount}
                  onChange={(e) => {
                    setAmount(+e.target.value);
                  }}
                />
              </div>
              <div className="calculator-date-box">
                <div className="calculator-date-box-input">
                  <Input
                    style={{ width: "75%" }}
                    color="teal"
                    icon="calendar"
                    iconPosition="left"
                    value={term}
                  />
                  <label>Выберите срок</label>
                </div>
                <input
                  type="range"
                  min="3"
                  max="60"
                  step="3"
                  value={term}
                  onChange={(e) => {
                    setTerm(+e.target.value);
                  }}
                />
              </div>
              <Checkbox value={calculatorChekBox} onChange={(e)=>{
                setCalculatorChekBox(!calculatorChekBox)
              }} label="Получаю заработную плату на карту банка" />
            </div>
            <div className="calculator-total-box">
              <h5>Расчёт</h5>
              <p>
                Ежемесячный платёж ~ {formatToCurrencyNumber(monthlyPayment)}{" "}
                тенге
              </p>
              <p>Ставка от {interestRate}%</p>
              <p>*Расчет предварительный с комиссией 5%</p>
              <p>ГЭСВ от 27%</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Section4;
