import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Placeholder } from "semantic-ui-react";
import "./Dashboard.css";


const Dashboard = () => {
  const [currentAccounts, setCurrenAccounts] = useState([]);
  const [cards, setCards] = useState([]);
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios({
      method: "get",
      url: "accounts",
      baseURL: "http://127.0.0.1:3000",
    }).then((response) => {
      setLoading(false)
      const credits = [];
      const current = [];
      const cards = [];
      response.data.forEach((account) => {
        switch (account.type) {
          case "credit":
            credits.push(account);
            break;
          case "card":
            cards.push(account);
            break;
          case "account":
            current.push(account);
            break;
        }
      });
      setCurrenAccounts(current);
      setCards(cards);
      setCredits(credits);
    });
  }, []);

  console.log(cards);
  console.log(credits);
  console.log(currentAccounts);

  return (
    <div className="Dashboard-container">
      <div className="Dashboard-box1">
        <h4>Мои счета</h4>
        <div className="cards">
          <h4>Карты</h4>

          {loading? (
            <div className="dashboard-loader">
              <Placeholder style={{ width: "90%", margin: "20px" }} fluid>
                <Placeholder.Line length="full" />
                <Placeholder.Line length="very long" />
                <Placeholder.Line length="full" />
                <Placeholder.Line length="very long" />
              </Placeholder>
            </div>
          ) : (
            <div className="box-content">
              {cards.length ? cards.map((account, index) => (
                <div className="cardsFilter">
                  <div className="cardsBox">
                    <label>{account.alias}</label>
                    <div>{account.account}</div>
                  </div>

                  <div className="cardsBox">
                    <label>Номер Карты</label>
                    <div>{account.cardNumber}</div>
                  </div>

                  <div className="cardsBox">
                    <label>Дата</label>
                    <div>{account.expirationDate}</div>
                  </div>

                  <div className="cardsBox">
                    <label>Баланс</label>
                    <div>
                      {account.balance}
                      {account.currencyCode}
                    </div>
                  </div>
                </div>
              )) : <h3>Карта отсутствует</h3>}
            </div>
          )}
        </div>

        <div className="cards">
          <h4>Текущие счета</h4>
          {currentAccounts.map((account, index) => (
            <div className="cardsFilter">
              <div className="cardsBox">{account.account}</div>
              <div className="cardsBox">
                {account.balance}
                {account.currencyCode}
              </div>
            </div>
          ))}
        </div>

        <div className="cards">
          <h4>Кредиты</h4>
          {credits.map((account, index) => (
            <div className="cardsFilter">
              <div className="cardsBox">{account.account}</div>
              <div className="cardsBox">
                {account.balance}
                {account.currencyCode}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="Dashboard-box2">
        <h4>Мои платежи</h4>
        <div className="Dashboard-operations"></div>
        <h4>Мои переводы</h4>
        <div className="Dashboard-operations"></div>
        <h4>Последние операции</h4>
        <div className="Dashboard-operations"></div>
      </div>
    </div>
  );
};

export default Dashboard;
