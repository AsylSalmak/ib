import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Placeholder } from "semantic-ui-react";
import "./Dashboard.css";
import logo from "../../../../public/visa.png";
import Templates from "./Templates";
import { formatToCurrencyNumber } from "../../../../helpers/numbers";

const Dashboard = () => {
  const [currentAccounts, setCurrenAccounts] = useState([]);
  const [cards, setCards] = useState([]);
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: "accounts",
      baseURL: "http://127.0.0.1:3000",
    }).then((response) => {
      setLoading(false);
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

  return (
    <div className="Dashboard-container">
      <div className="Dashboard-block-1">
        <h4>Мои счета</h4>
        <div className="Dashboard-block1-itemBox">
          <h4>Карты</h4>
          {loading ? (
            <div className="dashboard-loader">
              <Placeholder style={{ width: "90%", margin: "20px" }} fluid>
                <Placeholder.Line length="full" />
                <Placeholder.Line length="very long" />
                <Placeholder.Line length="full" />
                <Placeholder.Line length="very long" />
              </Placeholder>
            </div>
          ) : (
            <div>
              {cards.length ? (
                cards.map((account, index) => (
                  <div className="cardsFilter">
                    <div className="cardsBox1">
                      <div className="cardsNumber">{account.cardNumber}</div>

                      <div className="cardsDate">
                        {account.expirationDate}
                        <img src={logo} />
                      </div>
                    </div>
                    <div className="cardsBox">
                      <label>{account.alias}</label>
                    </div>

                    <div className="cardsBox">
                      <label>Баланс</label>
                      <div>
                        <span>{formatToCurrencyNumber(account.balance)}</span>{" "}
                        <span>{account.currencyCode}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h3>Карта отсутствует</h3>
              )}
            </div>
          )}
        </div>

        <div className="Dashboard-block1-itemBox">
          <h4>Текущие счета</h4>
          {currentAccounts.map((account, index) => (
            <div className="cardsFilter">
              <div className="cardsBox">{account.account}</div>
              <div className="cardsBox">
                <span> {formatToCurrencyNumber(account.balance)}</span> {"  "}
                <span> {account.currencyCode}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="Dashboard-block1-itemBox">
          <h4>Кредиты</h4>
          {credits.map((account, index) => (
            <div className="cardsFilter">
              <div className="cardsBox">{account.account}</div>
              <div className="cardsBox">
                <span> {formatToCurrencyNumber(account.balance)}</span>
                {"  "}
                <span> {account.currencyCode}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Templates />
    </div>
  );
};

export default Dashboard;
